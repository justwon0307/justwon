from rest_framework.exceptions import (
  APIException,
  AuthenticationFailed,
  NotAuthenticated,
  NotFound,
  PermissionDenied,
  ValidationError,
)

from base.exceptions import justwon_exception_handler


def test_validation_error_handler_tuple():
  exc = ValidationError(
    {
      "field1": ["error1", "error2"],
      "field2": "error3",
    }
  )
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 400
  assert response.data["code"] == "VALIDATION_ERROR"
  ## 첫 번째 오류 메시지만 반환하는지 확인
  assert response.data["message"] == "field1: error1"


def test_validation_error_handler_list():
  exc = ValidationError(
    [
      "error1",
      "error2",
    ]
  )
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 400
  assert response.data["code"] == "VALIDATION_ERROR"
  ## 첫 번째 오류 메시지만 반환하는지 확인
  assert response.data["message"] == "error1"


def test_validation_error_handler_str():
  exc = ValidationError("단일 오류 메시지")
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 400
  assert response.data["code"] == "VALIDATION_ERROR"
  assert response.data["message"] == "단일 오류 메시지"


def test_not_found_handler():
  exc = NotFound()
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 404
  assert response.data["code"] == "NOT_FOUND"
  assert response.data["message"] == "요청한 리소스를 찾을 수 없습니다."


def test_permission_denied_handler():
  exc = PermissionDenied()
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 403
  assert response.data["code"] == "FORBIDDEN"
  assert response.data["message"] == "접근 권한이 없습니다."


def test_not_authenticated_handler():
  exc = NotAuthenticated()
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 403
  assert response.data["code"] == "FORBIDDEN"
  assert response.data["message"] == "접근 권한이 없습니다."


def test_authentication_failed_handler():
  exc = AuthenticationFailed()
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 403
  assert response.data["code"] == "FORBIDDEN"
  assert response.data["message"] == "접근 권한이 없습니다."


def test_unknown_error_handler():
  class CustomException(Exception):
    pass

  exc = CustomException("알 수 없는 오류")
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 500
  assert response.data["code"] == "UNKNOWN_ERROR"
  assert response.data["message"] == "서버에서 알 수 없는 오류가 발생했습니다."


def test_other_drf_exception_handler():
  exc = APIException("다른 DRF 예외")
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 500
  assert response.data["code"] == "UNKNOWN_ERROR"
  assert response.data["message"] == "서버에서 알 수 없는 오류가 발생했습니다."


def test_other_exception_handler():
  class AnotherCustomException(Exception):
    pass

  exc = AnotherCustomException("다른 알 수 없는 오류")
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 500
  assert response.data["code"] == "UNKNOWN_ERROR"
  assert response.data["message"] == "서버에서 알 수 없는 오류가 발생했습니다."
