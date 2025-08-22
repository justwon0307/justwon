from rest_framework.test import APITestCase


class BlogCategoryGroupAPITestCase(APITestCase):
    fixtures = ["data/initial/categories.json"]

    def test_list(self):
        response = self.client.get("/api/v1/blog/groups/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 4) ## 테스트 데이터에는 4개의 그룹이 있다

    def test_retrieve(self):
        response = self.client.get("/api/v1/blog/groups/computer-science/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["name"], "Computer Science")
