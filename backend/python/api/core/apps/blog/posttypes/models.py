from django.db import models

from apps.blog.enums import BlogSection


class PostType(models.Model):
  name = models.CharField(max_length=100, unique=True)
  icon = models.CharField(max_length=20)
  slug = models.SlugField(unique=True)
  section = models.IntegerField(choices=BlogSection.choices)
  description = models.TextField(blank=True, default="")

  class Meta:
    db_table = "post_types"
    verbose_name = "게시글 유형"
    verbose_name_plural = "게시글 유형"

  def __str__(self):
    return self.name
