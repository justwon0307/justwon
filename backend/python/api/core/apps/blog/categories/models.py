from django.db import models

from apps.blog.enums import BlogSection
from base.models import SluggedModel


class Category(SluggedModel):
  name = models.CharField(max_length=100)
  icon = models.CharField(max_length=20)
  section = models.IntegerField(choices=BlogSection.choices)
  description = models.TextField(default="", blank=True)

  slug_base_field = "name"

  class Meta:
    db_table = "categories"
    verbose_name = "카테고리"
    verbose_name_plural = "카테고리"

  def __str__(self):
    return self.name
