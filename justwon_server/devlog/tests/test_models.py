from django.test import TestCase

from ..models import CategoryGroup, Category, PostType, Post, Series, Tag

exmple_html = """
<p>Image credit: <a href='https://example.com'>Example<script>ShouldBeDeleted</script></a></p>
"""


class BlogModelsTests(TestCase):
    def test_models_str(self):
        category_group = CategoryGroup.objects.create(
            name="Test Group", kor_name="테스트 그룹"
        )
        self.assertEqual(str(category_group), "0. Test Group (테스트 그룹)")

        category = Category.objects.create(name="Test Category", group=category_group)
        self.assertEqual(str(category), "[Test Group] 0. Test Category")

        post_type = PostType.objects.create(name="Test Post Type")
        self.assertEqual(str(post_type), "0. Test Post Type")

        series = Series.objects.create(title="Test Series")
        self.assertEqual(str(series), "Test Series")

        tag = Tag.objects.create(name="Test Tag")
        self.assertEqual(str(tag), "Test Tag")

        post = Post.objects.create(
            title="Test Post",
            content="This is a test post.",
            category=category,
            post_type=post_type,
            series=series,
        )
        self.assertEqual(str(post), "Test Post")

    def test_category_image_html_cleaning(self):
        category = Category.objects.create(
            name="Test Category",
            group=CategoryGroup.objects.create(
                name="Test Group", kor_name="테스트 그룹"
            ),
            image_credit_html=exmple_html,
        )
        cleaned_html = category.image_credit_html
        self.assertIn("Image credit:", cleaned_html)
        self.assertIn("Example", cleaned_html)
        self.assertNotIn("<script>", cleaned_html)
        self.assertNotIn("ShouldBeDeleted", cleaned_html)
