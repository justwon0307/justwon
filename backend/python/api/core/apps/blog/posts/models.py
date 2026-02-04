from django.core.exceptions import ValidationError
from django.db import models

from base.models import TimeStampedModel


class Post(TimeStampedModel):
  title = models.CharField(max_length=200)
  slug = models.SlugField(max_length=200, unique=True)
  description = models.TextField()  ## SEO 및 목록 미리보기
  content = models.TextField()
  thumbnail_url = models.URLField()

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
  extras = models.JSONField(default=dict)

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

  def clean(self):
    """
    저장하기 전 데이터 무결성을 검증.
      - posttype와 category의 section이 일치하는지 확인해야한다.
    """
    if self.category and self.post_type:
      if self.category.section != self.post_type.section:
        raise ValidationError(
          "PostType의 section과 Category의 section이 일치하지 않습니다."
        )

  def save(self, *args, **kwargs):
    # Admin이 아닌 코드에서 save()를 직접 호출해도 검증을 수행해야 한다.
    self.full_clean()
    super().save(*args, **kwargs)
