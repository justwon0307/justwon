from django.db import models


class PostType(models.Model):
    """게시글 유형 모델"""

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=80, unique=True)
    slug = models.SlugField(max_length=80, unique=True)

    description = models.TextField(blank=True, default="")
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.order}. {self.name}"

    class Meta:
        db_table = "post_type"
        verbose_name = "게시글 유형"
        verbose_name_plural = "게시글 유형"
        ordering = ["order", "id"]
