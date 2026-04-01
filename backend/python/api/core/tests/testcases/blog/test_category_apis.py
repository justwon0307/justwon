import pytest

from tests.factories import CategoryFactory

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def setup():
  CategoryFactory(name="네트워크", slug="network")
  CategoryFactory(name="인공지능", slug="ai")
  CategoryFactory(name="프론트엔드", slug="frontend")
  CategoryFactory(name="백엔드", slug="backend")
  CategoryFactory(name="데브옵스", slug="devops")


def test_list(api_client):
  response = api_client.get("/api/blog/categories/")

  assert response.status_code == 200
  assert len(response.data) == 5


def test_retrieve(api_client):
  response = api_client.get("/api/blog/categories/network/")

  assert response.status_code == 200
  assert response.data["name"] == "네트워크"
