from django.db import models

from base.models import TimeStampedModel


class Series(TimeStampedModel):
  title = models.CharField(max_length=200, unique=True)
  slug = models.SlugField(max_length=200, unique=True)
  description = models.TextField(blank=True)

  is_active = models.BooleanField(default=True)

  class Meta:
    db_table = "series"
    verbose_name = "시리즈"
    verbose_name_plural = "시리즈"

  def __str__(self):
    return self.title
