from django.db import models


class Tag(models.Model):
  name = models.CharField(max_length=100, unique=True)
  slug = models.SlugField(max_length=100, unique=True)
  color = models.CharField(max_length=7, default="#FFFFFF")  # Hex color code

  class Meta:
    db_table = "tags"
    verbose_name = "태그"
    verbose_name_plural = "태그"

  def __str__(self):
    return self.name
