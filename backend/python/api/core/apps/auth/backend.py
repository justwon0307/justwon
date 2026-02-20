from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend

from base.exceptions import AuthenticationError

User = get_user_model()
_HEADER_NAME = "X-JUSTWON-CLIENT"


class AuthBackend(ModelBackend):
  def authenticate(self, request, username=None, password=None, **kwargs):
    ## Django admin은 클라이언트 헤더 검증을 건너뜀
    if request is None or request.path.startswith("/admin/"):
      return super().authenticate(
        request, username=username, password=password, **kwargs
      )

    ## 추가적인 클라이언트 검증 로직
    client = request.headers.get(_HEADER_NAME, "")
    allowed_clients = settings.ALLOWED_AUTH_CLIENTS

    if client not in allowed_clients:
      raise AuthenticationError(detail="허용되지 않은 클라이언트입니다.")

    try:
      user = User.objects.get(username=username.lower())
    except User.DoesNotExist as e:
      User().set_password(password)  ## 타이밍 공격 방지
      raise AuthenticationError(
        detail="아이디 또는 비밀번호가 올바르지 않습니다."
      ) from e

    ## !! 일단 초기에는 superuser만 로그인 가능하도록 한다 !! ##
    ## TODO: 추후에 일반 사용자도 로그인할 수 있도록 수정해야 한다.
    if not user.is_superuser:
      raise AuthenticationError(detail="유효하지 않은 사용자입니다.")

    if user.check_password(password) and self.user_can_authenticate(user):
      return user

    raise AuthenticationError(detail="아이디 또는 비밀번호가 올바르지 않습니다.")
