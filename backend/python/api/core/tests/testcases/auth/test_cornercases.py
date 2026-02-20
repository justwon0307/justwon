import pytest
from django.test import RequestFactory

from apps.auth.backend import AuthBackend
from tests.factories import UserFactory

pytestmark = pytest.mark.django_db


def test_authenticate_without_request():
  user = UserFactory(is_superuser=True)
  backend = AuthBackend()

  result = backend.authenticate(None, username=user.username, password="password")

  assert result == user


def test_authenticate_from_admin():
  user = UserFactory(is_superuser=True)
  backend = AuthBackend()
  request = RequestFactory().post("/admin/login/")

  result = backend.authenticate(request, username=user.username, password="password")

  assert result == user


def test_auth_api_fail_missing_client_header(api_client):
  res = api_client.post(
    "/api/login/",
    {"username": "admin", "password": "password"},
    **{"HTTP_X_JUSTWON_CLIENT": "invalid-client"},
  )

  assert res.status_code == 401
  assert res.data["code"] == "UNAUTHORIZED"
  assert res.data["message"] == "허용되지 않은 클라이언트입니다."


def test_auth_api_fail_not_superuser(api_client):
  user = UserFactory(is_superuser=False)
  res = api_client.post(
    "/api/login/",
    {"username": user.username, "password": "password"},
  )

  assert res.status_code == 401
  assert res.data["code"] == "UNAUTHORIZED"
  assert res.data["message"] == "유효하지 않은 사용자입니다."


def test_login_fail_invalid_fields(api_client):
  res = api_client.post(
    "/api/login/",
    {"username": "", "password": ""},
  )

  assert res.status_code == 400
  assert res.data["code"] == "VALIDATION_ERROR"
  assert res.data["message"] == "아이디는 필수입니다."

  res = api_client.post(
    "/api/login/",
    {"username": "admin", "password": ""},
  )

  assert res.status_code == 400
  assert res.data["code"] == "VALIDATION_ERROR"
  assert res.data["message"] == "비밀번호는 필수입니다."
