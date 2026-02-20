import pytest

from apps.auth.user.models import User

pytestmark = pytest.mark.django_db


@pytest.fixture(name="user")
def user_fixture():
  return User.objects.create_user(username="TestUser", password="password")


def test_create_user(user):
  ## username이 lowercase로 저장되는지 확인
  assert user.username == "testuser"
  assert user.is_active is True
  assert user.is_superuser is False


def test_create_user_without_username():
  with pytest.raises(ValueError):
    User.objects.create_user(username="", password="password")


def test_create_superuser():
  superuser = User.objects.create_superuser(username="AdminUser", password="password")

  ## username이 lowercase로 저장되는지 확인
  assert superuser.username == "adminuser"
  assert superuser.is_active is True
  assert superuser.is_superuser is True


def test_user_fields(user):
  assert str(user) == user.username
  assert user.is_staff is False
  assert user.has_perm("some_perm") is False
  assert user.has_module_perms("some_app") is False
