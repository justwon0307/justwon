import pytest

from tests.factories import UserFactory

pytestmark = pytest.mark.django_db


def test_me_with_avatar_url(api_client):
  admin = UserFactory(is_superuser=True, avatar_url="https://example.com/avatar.jpg")
  api_client.force_authenticate(user=admin)

  res = api_client.get("/api/me/")

  assert res.status_code == 200
  assert res.data["uuid"] == str(admin.uuid)
  assert res.data["username"] == admin.username
  assert res.data["avatar_url"] == "https://example.com/avatar.jpg"


def test_me_without_avatar_url(api_client):
  admin = UserFactory(is_superuser=True)
  api_client.force_authenticate(user=admin)

  res = api_client.get("/api/me/")

  assert res.status_code == 200
  assert res.data["uuid"] == str(admin.uuid)
  assert res.data["username"] == admin.username
  assert res.data["avatar_url"] is None
