import uuid

from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils import timezone

from .managers import UserManager


class User(AbstractBaseUser):
  uuid = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
  username = models.CharField(max_length=150, unique=True)

  avatar_url = models.URLField(blank=True)

  is_active = models.BooleanField(default=True)
  is_superuser = models.BooleanField(default=False)
  date_joined = models.DateTimeField(default=timezone.now)

  USERNAME_FIELD = "username"
  REQUIRED_FIELDS = []

  objects = UserManager()

  class Meta:
    db_table = "user"
    verbose_name = "유저"
    verbose_name_plural = "유저"

  def __str__(self):
    return self.username

  @property
  def is_staff(self):
    return self.is_superuser

  def has_perm(self, perm, obj=None):  ## pylint: disable=unused-argument
    return self.is_superuser

  def has_module_perms(self, app_label):  ## pylint: disable=unused-argument
    return self.is_superuser

  def save(self, *args, **kwargs):
    ## username을 lowercase로 저장
    if self.username:
      self.username = self.username.lower()

    super().save(*args, **kwargs)
