from django.test import TestCase


from ..models import CategoryGroup, Category
from ..utils import clean_html


class CategoriesModelTestCase(TestCase):
    fixtures = ["data/initial/categories.json"]

    def test_category_group_str(self):
        group = CategoryGroup.objects.get(slug="computer-science")
        self.assertEqual(str(group), "1. Computer Science (컴퓨터 공학)")

    def test_category_str(self):
        category = Category.objects.get(slug="network")
        self.assertEqual(str(category), "[Computer Science] 1. 네트워크")

    def test_category_save_html_cleaning(self):
        category = Category.objects.get(slug="network")
        category.image_credit_html = "<p>Test <script>alert('XSS')</script>content</p>"
        category.save()

        # Assuming clean_html is a utility function that cleans HTML content
        cleaned_content = clean_html(category.image_credit_html)
        self.assertEqual(cleaned_content, "<p>Test content</p>")
