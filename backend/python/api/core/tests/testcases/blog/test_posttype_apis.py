import pytest

from tests.factories import PostTypeFactory

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def setup():
  PostTypeFactory(name="개발 일지", slug="devlog")
  PostTypeFactory(name="프로젝트 후기", slug="project-review")
  PostTypeFactory(name="기술 칼럼", slug="tech-column")
  PostTypeFactory(name="커리어 이야기", slug="career-story")
  PostTypeFactory(name="기타", slug="etc")


def test_list(api_client):
  response = api_client.get("/api/blog/posttypes/")

  assert response.status_code == 200
  assert len(response.data) == 5


def test_retrieve(api_client):
  response = api_client.get("/api/blog/posttypes/devlog/")

  assert response.status_code == 200
  assert response.data["name"] == "개발 일지"
