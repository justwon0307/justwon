from django.conf import settings
from django.utils import timezone
from rest_framework.response import Response


def _get_cookie_attrs():
  return {
    "path": "/",
    "httponly": True,
    "secure": not settings.DEBUG,
    "samesite": "Lax",  ## 여러 앱을 개발중이기 때문에, Strict는 적절하지 않다.
    "domain": settings.JWT_AUTH_COOKIE_DOMAIN,
  }


def delete_refresh_cookie(response: Response):
  ## 로그아웃이 성공적으로 이루어진 후, 클라이언트에 저장된 refresh token cookie를 삭제.
  ## delete_cookie를 사용하면, attribute들이 제대로 설정되지 않아
  ## 삭제되지 않는 문제가 발생하여 set_cookie로 대체하였다.
  response.set_cookie(
    settings.JWT_AUTH_COOKIE,
    max_age=0,
    expires="Thu, 01 Jan 1970 00:00:00 GMT",
    **_get_cookie_attrs(),
  )
  return response


def set_refresh_cookie(response: Response, refresh_token: str):
  ## 클라이언트로 refresh token을 전달하지 않고, httpOnly cookie로 전달하여 보안을 강화.
  ## 본 메소드를 호출하기 전, 반드시 data에서 pop 해야한다.
  expires_at = timezone.now() + settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"]

  response.set_cookie(
    settings.JWT_AUTH_COOKIE,
    refresh_token,
    expires=expires_at,
    **_get_cookie_attrs(),
  )

  return response
