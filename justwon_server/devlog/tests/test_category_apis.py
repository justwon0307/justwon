from rest_framework.test import APITestCase


class BlogCategoryAPITestCase(APITestCase):
    fixtures = ["data/initial/categories.json"]

    def test_list(self):
        response = self.client.get("/api/v1/blog/categories/")

        self.assertEqual(response.status_code, 405)  # 해당 API는 허용되지 않는다

    def test_retrieve(self):
        response = self.client.get("/api/v1/blog/categories/network/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["name"], "네트워크")
