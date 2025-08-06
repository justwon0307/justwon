from django.db import models


class CategoryGroup(models.Model):
    """
    카테고리 그룹 모델
    """

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    kor_name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True)

    def __str__(self):
        return f"{self.name} ({self.kor_name})"

    class Meta:
        db_table = "learning_category_group"
        verbose_name = "카테고리"
        verbose_name_plural = "카테고리 그룹"


class Category(models.Model):
    """
    카테고리 모델
    """

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True)
    group = models.ForeignKey(
        CategoryGroup, on_delete=models.CASCADE, related_name="categories"
    )

    def __str__(self):
        return f"[{self.group.name}] {self.name}"

    class Meta:
        db_table = "learning_category"
        verbose_name = "카테고리"
        verbose_name_plural = "카테고리"
