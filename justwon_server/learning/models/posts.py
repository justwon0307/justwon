from django.db import models

from .categories import Category
from core.models import BasePost


class Post(BasePost):
    """
    게시글 모델
    """

    field = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="posts")

    class Meta:
        db_table = "learning_posts"
        verbose_name = "Learning 게시글 "
        verbose_name_plural = "Learning 게시글"

    def __str__(self):
        return self.title
