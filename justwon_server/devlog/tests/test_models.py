from django.test import TestCase

from ..models import CategoryGroup, Category


class BlogModelsTests(TestCase):
    def test_models_str(self):
        category_group = CategoryGroup.objects.create(
            name="Test Group", kor_name="테스트 그룹"
        )
        self.assertEqual(str(category_group), "Test Group (테스트 그룹)")

        category = Category.objects.create(name="Test Category", group=category_group)
        self.assertEqual(str(category), "[Test Group] Test Category")
