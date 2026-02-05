from django.db import models

from base.models import SluggedModel, TimeStampedModel


class Series(SluggedModel, TimeStampedModel):
  title = models.CharField(max_length=200, unique=True)
  description = models.TextField(blank=True, default="")

  is_active = models.BooleanField(default=True)

  slug_base_field = "title"

  class Meta:
    db_table = "series"
    verbose_name = "시리즈"
    verbose_name_plural = "시리즈"

  def __str__(self):
    return self.title
