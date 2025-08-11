from django.db import models


class Series(models.Model):
    """시리즈 모델"""

    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True, allow_unicode=True)

    description = models.TextField(blank=True, default="")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "series"
        verbose_name = "시리즈"
        verbose_name_plural = "시리즈"

    def __str__(self):
        return self.title
