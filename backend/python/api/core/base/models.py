from django.core.exceptions import ValidationError
from django.db import models
from django.utils.text import slugify


class TimeStampedModel(models.Model):
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    abstract = True


class SluggedModel(models.Model):
  slug = models.SlugField(max_length=200, unique=True)

  class Meta:
    abstract = True

  def save(self, *args, **kwargs):
    if not hasattr(self, "slug_base_field"):
      raise ValidationError("slug_base_field 속성이 정의되어 있지 않습니다.")

    if not self.slug and hasattr(self, "slug_base_field"):
      base_value = getattr(self, self.slug_base_field)
      self.slug = slugify(base_value)

    super().save(*args, **kwargs)
