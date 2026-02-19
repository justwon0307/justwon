from rest_framework.exceptions import (
  AuthenticationFailed,
  NotAuthenticated,
  NotFound,
  PermissionDenied,
  Throttled,
  ValidationError,
)
from rest_framework.views import exception_handler

from .exceptions import JustWonException
from .responses import (
  auth_error_response,
  not_found_response,
  throttled_response,
  unknown_error_response,
  validation_error_response,
)


def justwon_exception_handler(exc, context):
  response = exception_handler(exc, context)

  if response is None:
    ## RestFramework의 Docstring에 의하면, None을 반환하는 경우는 500 처리
    return unknown_error_response()

  if isinstance(exc, JustWonException):
    return exc.get_error_response()

  ## 기타 처리하지 못한 기본 DRF 예외들도 기본 포맷으로 변환하여 반환
  if isinstance(exc, NotFound):
    return not_found_response()

  if isinstance(exc, Throttled):
    return throttled_response(exc.wait)

  if isinstance(exc, (AuthenticationFailed, NotAuthenticated, PermissionDenied)):
    ## 별도로 처리하지 않은 인증/권한 예외들은 전부 403 FORBIDDEN으로 처리
    return auth_error_response()

  if isinstance(exc, ValidationError):
    return validation_error_response(exc)

  ## 기타 예외도 가능한 code, message 포맷으로 변환
  return unknown_error_response()
