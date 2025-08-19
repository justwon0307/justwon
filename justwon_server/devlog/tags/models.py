from django.db import models


class Tag(models.Model):
    """태그 모델"""

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    color = models.CharField(max_length=7, blank=True)
    icon = models.CharField(max_length=100, blank=True, default="")

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "tag"
        verbose_name = "태그"
        verbose_name_plural = "태그"
