from rest_framework.test import APITestCase


class LearningInitializerViewTests(APITestCase):
    fixtures = ["data/initial/learning.json"]

    def test_learning_initializer_view(self):
        response = self.client.get("/api/v1/learning/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            len(response.data), 3
        )  ## 테스트 데이터에 총 3개의 카테고리 그룹이 있다.
