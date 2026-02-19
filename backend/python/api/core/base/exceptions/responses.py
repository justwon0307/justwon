from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response


def unknown_error_response():
  data = {
    "code": "SERVER_ERROR",
    "message": "서버에서 알 수 없는 오류가 발생했습니다.",
  }
  return Response(data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def not_found_response():
  data = {
    "code": "NOT_FOUND",
    "message": "요청한 리소스를 찾을 수 없습니다.",
  }
  return Response(data, status=status.HTTP_404_NOT_FOUND)


def auth_error_response():
  data = {
    "code": "FORBIDDEN",
    "message": "접근 권한이 없습니다.",
  }
  return Response(data, status=status.HTTP_403_FORBIDDEN)


def throttled_response(wait_time):
  data = {
    "code": "THROTTLED",
    "message": f"요청이 너무 많습니다. {wait_time}초 후에 다시 시도해주세요.",
  }
  return Response(data, status=status.HTTP_429_TOO_MANY_REQUESTS)


def validation_error_response(exc: ValidationError):
  # 첫 번째 에러 메시지만 반환
  if isinstance(exc.detail, dict):
    _, errors = next(iter(exc.detail.items()))
    message_str = errors[0] if isinstance(errors, list) else errors
  else:
    message_str = str(exc.detail[0])

  data = {
    "code": "VALIDATION_ERROR",
    "message": message_str,
  }
  return Response(data, status=status.HTTP_400_BAD_REQUEST)
