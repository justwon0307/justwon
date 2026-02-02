from django.db import models

from base.models import TimeStampedModel


class Post(TimeStampedModel):
  title = models.CharField(max_length=200)
  slug = models.SlugField(max_length=200, unique=True)
  content = models.TextField()

  category = models.ForeignKey(
    "categories.Category", on_delete=models.PROTECT, related_name="posts"
  )
  post_type = models.ForeignKey(
    "posttypes.PostType", on_delete=models.PROTECT, related_name="posts"
  )
  series = models.ForeignKey(
    "series.Series", on_delete=models.SET_NULL, null=True, related_name="posts"
  )
  tags = models.ManyToManyField("tags.Tag", related_name="posts", blank=True)

  is_published = models.BooleanField(default=False)

  class Meta:
    db_table = "posts"
    verbose_name = "포스트"
    verbose_name_plural = "포스트"
    ordering = ["-created_at"]
    indexes = [
      models.Index(fields=["slug"]),
      models.Index(fields=["-created_at"]),
    ]

  def __str__(self):
    return self.title
