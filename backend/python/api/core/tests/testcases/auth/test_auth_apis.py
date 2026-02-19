import pytest
from django.conf import settings

from tests.factories import UserFactory

pytestmark = pytest.mark.django_db


def test_all_apis_success(api_client):
  admin = UserFactory(is_superuser=True)
  login_res = api_client.post(
    "/api/login/",
    {"username": admin.username, "password": "password"},
  )
  refresh = login_res.cookies[settings.JWT_AUTH_COOKIE].value

  assert login_res.status_code == 200
  assert "access" in login_res.data
  assert "refresh" not in login_res.data

  refresh_res = api_client.post(
    "/api/tokens/refresh/",
    **{"HTTP_COOKIE": f"{settings.JWT_AUTH_COOKIE}={refresh}"},
  )

  assert refresh_res.status_code == 200
  assert "access" in refresh_res.data
  assert "refresh" not in refresh_res.data

  new_refresh = refresh_res.cookies[settings.JWT_AUTH_COOKIE].value

  logout_res = api_client.post(
    "/api/logout/",
    **{"HTTP_COOKIE": f"{settings.JWT_AUTH_COOKIE}={new_refresh}"},
  )

  assert logout_res.status_code == 204


def test_login_fail_invalid_username(api_client):
  res = api_client.post(
    "/api/login/",
    {"username": "nonexistent", "password": "wrongpassword"},
  )

  assert res.status_code == 401
  assert res.data["code"] == "UNAUTHORIZED"
  assert res.data["message"] == "아이디 또는 비밀번호가 올바르지 않습니다."


def test_login_fail_invalid_password(api_client):
  admin = UserFactory(is_superuser=True)
  res = api_client.post(
    "/api/login/",
    {"username": admin.username, "password": "wrongpassword"},
  )

  assert res.status_code == 401
  assert res.data["code"] == "UNAUTHORIZED"
  assert res.data["message"] == "아이디 또는 비밀번호가 올바르지 않습니다."


def test_refresh_fail_missing_cookie(api_client):
  res = api_client.post("/api/tokens/refresh/")

  assert res.status_code == 401
  assert res.data["code"] == "UNAUTHORIZED"
  assert res.data["message"] == "토큰 갱신에 실패했습니다."


def test_refresh_fail_invalid_token(api_client):
  res = api_client.post(
    "/api/tokens/refresh/",
    **{"HTTP_COOKIE": f"{settings.JWT_AUTH_COOKIE}=invalidtoken"},
  )

  assert res.status_code == 401
  assert res.data["code"] == "UNAUTHORIZED"
  assert res.data["message"] == "토큰 갱신에 실패했습니다."


def test_refresh_fail_blacklisted_token(api_client):
  admin = UserFactory(is_superuser=True)
  login_res = api_client.post(
    "/api/login/",
    {"username": admin.username, "password": "password"},
  )
  refresh_token = login_res.cookies[settings.JWT_AUTH_COOKIE].value

  api_client.post(
    "/api/logout/",
    **{"HTTP_COOKIE": f"{settings.JWT_AUTH_COOKIE}={refresh_token}"},
  )

  res = api_client.post(
    "/api/tokens/refresh/",
    **{"HTTP_COOKIE": f"{settings.JWT_AUTH_COOKIE}={refresh_token}"},
  )

  assert res.status_code == 401
  assert res.data["code"] == "UNAUTHORIZED"
  assert res.data["message"] == "토큰 갱신에 실패했습니다."


def test_logout_missing_cookie(api_client):
  res = api_client.post("/api/logout/")

  assert res.status_code == 204
