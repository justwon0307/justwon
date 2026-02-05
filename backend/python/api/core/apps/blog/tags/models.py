from django.db import models

from base.models import SluggedModel


class Tag(SluggedModel):
  name = models.CharField(max_length=100, unique=True)
  color = models.CharField(max_length=7, default="#FFFFFF")  # Hex color code

  slug_base_field = "name"

  class Meta:
    db_table = "tags"
    verbose_name = "태그"
    verbose_name_plural = "태그"

  def __str__(self):
    return self.name
