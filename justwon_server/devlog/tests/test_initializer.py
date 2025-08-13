from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase


class BlogInitializerAPITestCase(APITestCase):
    fixtures = [
        "data/test/auth.json",
        "data/initial/categories.json",
        "data/initial/posttypes.json",
        "data/initial/series.json",
        "data/initial/tags.json",
    ]

    def setUp(self):
        user_model = get_user_model()
        self.admin = user_model.objects.get(username="admin")

    def test_initializer(self):
        response = self.client.get("/api/v1/blog/initialize/")

        self.assertEqual(response.status_code, 200)

    def test_admin_initializer(self):
        self.client.force_authenticate(user=self.admin)
        response = self.client.get("/api/admin/blog/initialize/")

        self.assertEqual(response.status_code, 200)
