from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
import uuid

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    archived = models.BooleanField(default=False)
    archived_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        abstract = True
        

class CustomUser(AbstractUser, BaseModel):
    # Core identity
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    # Profile details
    name = models.CharField(max_length=30)
    bio = models.TextField(blank=True)
    profile_pic = models.ImageField(upload_to="profiles/", null=True, blank=True)
    dob = models.DateField()
    gender = models.CharField(
        max_length=20,
        choices=[("male", "Male"), ("female", "Female"), ("unspecified", "Unspecified")],
        default="unspecified"
    )

    # Location & region info
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    current_lat = models.FloatField(null=True, blank=True)
    current_lng = models.FloatField(null=True, blank=True)
    last_location_update = models.DateTimeField(auto_now=True)

    # Privacy & preferences
    is_private = models.BooleanField(default=False)
    allow_anonymous_followers = models.BooleanField(default=True)
    allow_anonymous_comments = models.BooleanField(default=True)

    # Reputation & ranking
    score = models.IntegerField(default=0)   # weighted from posts, comments, votes
    badges = models.ManyToManyField("Badge", blank=True)

    def __str__(self):
        return self.username
    

class Follow(models.Model):
    follower = models.ForeignKey(CustomUser, related_name="following", on_delete=models.CASCADE)
    following = models.ForeignKey(CustomUser, related_name="followers", on_delete=models.CASCADE)
    is_anonymous = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("follower", "following")

    def __str__(self):
        return f"{self.follower} → {self.following} ({'anon' if self.is_anonymous else 'public'})"


class AnonymousIdentity(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="anon_identities")
    target_user = models.ForeignKey(CustomUser, null=True, blank=True, on_delete=models.CASCADE,
                                    related_name="anon_followers")      
    anon_name = models.CharField(max_length=20, default="", blank=True)
    anon_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    update_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ("user", "target_user")

    def __str__(self):
        return f"{self.user} as {self.anon_name or self.anon_uuid} for {self.target_user or 'global'}"


class RevealRequest(models.Model):
    from_user = models.ForeignKey(CustomUser, related_name="sent_reveals", on_delete=models.CASCADE)
    to_user = models.ForeignKey(CustomUser, related_name="received_reveals", on_delete=models.CASCADE)
    anon_identity = models.ForeignKey(AnonymousIdentity, on_delete=models.CASCADE)

    status = models.CharField(
        max_length=20,
        choices=[("pending", "Pending"), ("accepted", "Accepted"), ("rejected", "Rejected")],
        default="pending"
    )
    created_at = models.DateTimeField(auto_now_add=True)


class Badge(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    emoji = models.CharField(max_length=10, blank=True)  # 🥇🔥 etc.
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
