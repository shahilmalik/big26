from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.utils import timezone
from datetime import timedelta
from .models import EmailOTP, DeviceToken
from .serializers import (
    EmailOTPRequestSerializer, VerifyOTPSerializer,
    SignupSerializer, LoginSerializer
)

import random

class AuthViewSet(viewsets.ViewSet):
    @action(detail=False, methods=["post"])
    def request_otp(self, request):
        serializer = EmailOTPRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data["email"]
        purpose = serializer.validated_data["purpose"]

        otp = str(random.randint(100000, 999999))
        EmailOTP.objects.create(
            email=email,
            otp=otp,
            purpose=purpose,
            expires_at=timezone.now() + timedelta(minutes=10),
        )
        # TODO: send OTP via email service
        print(f"--[OTP: {otp}]---")
        return Response({"message": f"OTP sent to {email}"}, status=200)

    @action(detail=False, methods=["post"])
    def verify_otp(self, request):
        serializer = VerifyOTPSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data["email"]
        otp = serializer.validated_data["otp"]

        try:
            record = EmailOTP.objects.filter(email=email, otp=otp).latest("created_at")
        except EmailOTP.DoesNotExist:
            return Response({"error": "Invalid OTP"}, status=400)

        if not record.is_valid():
            return Response({"error": "OTP expired"}, status=400)

        return Response({"message": "OTP verified"}, status=200)

    @action(detail=False, methods=["post"])
    def signup(self, request):
        serializer = SignupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        device_type = request.data.get("device_type", "mobile")
        token, _ = DeviceToken.objects.get_or_create(user=user, device_type=device_type)

        return Response({"token": token.key, "user": user.username}, status=201)

    @action(detail=False, methods=["post"])
    def login(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]

        device_type = request.data.get("device_type", "mobile")
        token, _ = DeviceToken.objects.get_or_create(user=user, device_type=device_type)

        return Response({"token": token.key, "user": user.username}, status=200)

    @action(detail=False, methods=["post"])
    def forgot_password(self, request):
        serializer = EmailOTPRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # reuse request_otp with "reset"
        return self.request_otp(request)
