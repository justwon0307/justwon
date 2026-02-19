from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework_simplejwt.serializers import (
  TokenBlacklistSerializer,
  TokenRefreshSerializer,
)
from rest_framework_simplejwt.views import TokenBlacklistView, TokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView as BaseTokenRefreshView

from base.exceptions import AuthenticationError
from base.log import log

from .cookies import delete_refresh_cookie, set_refresh_cookie
from .serializers import LoginSerializer


class LoginView(TokenObtainPairView):
  serializer_class = LoginSerializer
  permission_classes = []
  authentication_classes = []
  throttle_scope = "login"

  def post(self, request, *args, **kwargs):
    res = super().post(request, *args, **kwargs)

    refresh_token = res.data.pop("refresh")

    return set_refresh_cookie(res, refresh_token)


class TokenRefreshView(BaseTokenRefreshView):
  throttle_scope = "refresh"
  permission_classes = []
  authentication_classes = []  ## Refresh 시에도 인증이 필요하지 않도록 설정

  def post(self, request, *args, **kwargs):
    refresh_token = request.COOKIES.get(settings.JWT_AUTH_COOKIE, None)

    if not refresh_token:
      raise AuthenticationError(detail="토큰 갱신에 실패했습니다.")

    serializer = TokenRefreshSerializer(data={"refresh": refresh_token})

    try:
      serializer.is_valid(raise_exception=True)
    except TokenError as e:
      raise AuthenticationError(detail="토큰 갱신에 실패했습니다.") from e

    new_refresh_token = serializer.validated_data.get("refresh")
    new_access_token = serializer.validated_data.get("access")

    res = Response(data={"access": new_access_token}, status=status.HTTP_200_OK)

    return set_refresh_cookie(res, new_refresh_token)


class LogoutView(TokenBlacklistView):
  serializer_class = TokenBlacklistSerializer
  permission_classes = []
  authentication_classes = []  ## Logout 시에도 인증이 필요하지 않도록 설정
  throttle_scope = "blacklist"

  def post(self, request, *args, **kwargs):
    refresh_token = request.COOKIES.get(settings.JWT_AUTH_COOKIE, None)

    if refresh_token:
      serializer = self.get_serializer(data={"refresh": refresh_token})

      try:
        serializer.is_valid(raise_exception=True)
        serializer.save()
      except Exception:
        ## 추후 블랙리스트 처리 실패에 대한 대응 방안을 마련할 때까지는
        ## 로그를 통해 모니터링한다.
        ## 옵션은: retry-queue, 유저 모델에 is_revoked 필드 추가 등
        log(f"블랙리스트 처리 실패: {refresh_token}", level="warning")

    ## 토큰이 있든 없든, 블랙리스트 처리에 성공했든 실패했든
    ## 최종적으로 클라이언트에 저장된 쿠키는 삭제한다. (Defensive programming)
    res = Response(status=status.HTTP_204_NO_CONTENT)
    return delete_refresh_cookie(res)
