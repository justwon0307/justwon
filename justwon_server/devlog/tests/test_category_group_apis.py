from rest_framework.test import APITestCase


class BlogCategoryGroupAPITestCase(APITestCase):
    fixtures = ["data/initial/categories.json"]

    def test_list(self):
        response = self.client.get("/api/v1/blog/groups/")

        self.assertEqual(response.status_code, 405)

    def test_retrieve(self):
        response = self.client.get("/api/v1/blog/groups/computer-science/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["name"], "Computer Science")
        self.assertIn("categories", response.data)
        self.assertGreater(len(response.data["categories"]), 0)
