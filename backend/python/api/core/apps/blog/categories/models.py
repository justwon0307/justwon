from django.db import models

from apps.blog.enums import BlogSection


class Category(models.Model):
  name = models.CharField(max_length=100)
  icon = models.CharField(max_length=20)
  slug = models.SlugField(unique=True)
  section = models.IntegerField(choices=BlogSection.choices)
  description = models.TextField(blank=True, default="")

  class Meta:
    db_table = "categories"
    verbose_name = "카테고리"
    verbose_name_plural = "카테고리"

  def __str__(self):
    return self.name
