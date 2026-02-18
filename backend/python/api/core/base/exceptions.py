from rest_framework import status
from rest_framework.exceptions import (
  NotAuthenticated,
  NotFound,
  PermissionDenied,
  ValidationError,
)
from rest_framework.response import Response
from rest_framework.views import exception_handler


def handle_validation_error(exc: ValidationError) -> Response:
  """
  ValidationError를 처리하여 일관된 응답 형식을 반환합니다.
  """
  # detail이 dict 또는 list 형태이므로 이를 문자열로 변환
  if isinstance(exc.detail, dict):
    messages = []
    for field, errors in exc.detail.items():
      if isinstance(errors, list):
        for error in errors:
          messages.append(f"{field}: {error}")
      else:
        messages.append(f"{field}: {errors}")
    message_str = " | ".join(messages)
  elif isinstance(exc.detail, list):
    message_str = " | ".join([str(item) for item in exc.detail])
  else:
    message_str = str(exc.detail)

  data = {
    "code": "VALIDATION_ERROR",
    "message": message_str,
  }

  return Response(data, status=status.HTTP_400_BAD_REQUEST)


def justwon_exception_handler(exc, context):
  response = exception_handler(exc, context)

  if response is None:
    ## RestFramework의 Docstring에 의하면, None을 반환하는 경우는 500 처리
    data = {
      "code": "UNKNOWN_ERROR",
      "message": "서버에서 알 수 없는 오류가 발생했습니다.",
    }

    return Response(data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

  if isinstance(exc, NotFound):
    data = {
      "code": "NOT_FOUND",
      "message": "요청한 리소스를 찾을 수 없습니다.",
    }

    return Response(data, status=status.HTTP_404_NOT_FOUND)

  if isinstance(exc, (PermissionDenied, NotAuthenticated)):
    ## 401과 403을 구분하지 않고 모두 403으로 처리
    data = {
      "code": "FORBIDDEN",
      "message": "접근 권한이 없습니다.",
    }

    return Response(data, status=status.HTTP_403_FORBIDDEN)

  if isinstance(exc, ValidationError):
    return handle_validation_error(exc)

  ## 기타 예외도 가능한 code, message 포맷으로 변환
  data = {
    "code": getattr(exc, "code", "ERROR"),
    "message": str(getattr(exc, "detail", "오류가 발생했습니다.")),
  }

  return Response(data, status=response.status_code)
