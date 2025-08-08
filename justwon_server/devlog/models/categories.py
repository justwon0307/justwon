from django.db import models

from ..utils import clean_html


class CategoryGroup(models.Model):
    """
    카테고리 그룹 모델
    """

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=80, unique=True)
    kor_name = models.CharField(max_length=80, unique=True)
    slug = models.SlugField(max_length=80, unique=True, allow_unicode=True)

    icon = models.CharField(max_length=80)
    cover_image = models.URLField()
    image_credit_html = models.TextField()
    description = models.TextField(blank=True, default="")

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.order}. {self.name} ({self.kor_name})"

    class Meta:
        db_table = "category_group"
        verbose_name = "카테고리"
        verbose_name_plural = "카테고리 그룹"
        ordering = ["order", "id"]

    def save(self, *args, **kwargs):
        if self.image_credit_html:
            self.image_credit_html = clean_html(self.image_credit_html)

        super().save(*args, **kwargs)


class Category(models.Model):
    """
    카테고리 모델
    """

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=80, unique=True)
    kor_name = models.CharField(max_length=80, blank=True)
    slug = models.SlugField(max_length=80, unique=True, allow_unicode=True)
    group = models.ForeignKey(
        CategoryGroup, on_delete=models.CASCADE, related_name="categories"
    )

    icon = models.CharField(max_length=80)
    cover_image = models.URLField()
    image_credit_html = models.TextField()
    description = models.TextField(blank=True, default="")

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"[{self.group.name}] {self.order}.{self.name}"

    class Meta:
        db_table = "category"
        verbose_name = "카테고리"
        verbose_name_plural = "카테고리"
        ordering = ["group__order", "order", "id"]

    def save(self, *args, **kwargs):
        if self.image_credit_html:
            self.image_credit_html = clean_html(self.image_credit_html)

        super().save(*args, **kwargs)
