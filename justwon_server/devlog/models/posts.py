import uuid
from django.db import models

from .categories import Category
from .post_types import PostType
from .series import Series
from .tags import Tag


class Post(models.Model):
    """게시글 모델"""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    summary = models.CharField(max_length=300, blank=True)
    content = models.TextField()

    cover_image = models.URLField(blank=True)
    image_credit_html = models.TextField(blank=True)

    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, related_name="posts"
    )
    post_type = models.ForeignKey(
        PostType, on_delete=models.PROTECT, related_name="posts"
    )
    series = models.ForeignKey(
        Series, on_delete=models.SET_NULL, null=True, blank=True, related_name="posts"
    )
    series_order = models.PositiveIntegerField(default=0)
    tags = models.ManyToManyField(Tag, blank=True, related_name="posts")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)
    published_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = "post"
        verbose_name = "포스트"
        verbose_name_plural = "포스트"
        ordering = ["-published_at", "created_at", "id"]

    def __str__(self):
        return self.title
