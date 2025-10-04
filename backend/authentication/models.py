from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from django.db import models
from django.utils import timezone

class DeviceToken(Token):
    DEVICE_CHOICES = [
        ("web", "Web"),
        ("mobile", "Mobile"),
        ("tablet", "Tablet"),
    ]
    device_type = models.CharField(max_length=20, choices=DEVICE_CHOICES)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["user", "device_type"], name="unique_user_device"
            )
        ]

    def __str__(self):
        return f"{self.user} - {self.device_type}"

class DeviceTokenAuthentication(TokenAuthentication):
    model = DeviceToken

class EmailOTP(models.Model):
    email = models.EmailField()
    otp = models.CharField(max_length=6)
    purpose = models.CharField(
        max_length=20,
        choices=[("signup", "Signup"), ("reset", "Reset Password")],
    )
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()

    def is_valid(self):
        return timezone.now() <= self.expires_at