from django.db import models


class BasePost(models.Model):
    """
    게시글 모델의 기본 클래스.
    """

    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)

    content = models.TextField()
    admin_only = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
