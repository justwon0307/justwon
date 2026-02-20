from rest_framework.exceptions import (
  APIException,
  AuthenticationFailed,
  NotAuthenticated,
  NotFound,
  PermissionDenied,
  Throttled,
  ValidationError,
)

from base.exceptions import ServerError, justwon_exception_handler


def test_unknown_error_handler():
  class CustomException(Exception):
    pass

  exc = CustomException("알 수 없는 오류")
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 500
  assert response.data["code"] == "SERVER_ERROR"
  assert response.data["message"] == "서버에서 알 수 없는 오류가 발생했습니다."


def test_justwon_exception_handler():
  exc = ServerError("서버 오류 상세 메시지")
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 500
  assert response.data["code"] == "SERVER_ERROR"
  assert response.data["message"] == "서버에서 알 수 없는 오류가 발생했습니다."


def test_not_found_handler():
  exc = NotFound()
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 404
  assert response.data["code"] == "NOT_FOUND"
  assert response.data["message"] == "요청한 리소스를 찾을 수 없습니다."


def test_throttled_handler():
  exc = Throttled(wait=30)
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 429
  assert response.data["code"] == "THROTTLED"
  assert (
    response.data["message"] == "요청이 너무 많습니다. 30초 후에 다시 시도해주세요."
  )


def test_auth_exception_handler():
  expected_code = "FORBIDDEN"
  expected_message = "접근 권한이 없습니다."

  ## 1. AuthenticationFailed
  exc1 = AuthenticationFailed()
  response1 = justwon_exception_handler(exc1, None)

  assert response1.status_code == 403
  assert response1.data["code"] == expected_code
  assert response1.data["message"] == expected_message

  ## 2. NotAuthenticated
  exc2 = NotAuthenticated()
  response2 = justwon_exception_handler(exc2, None)

  assert response2.status_code == 403
  assert response2.data["code"] == expected_code
  assert response2.data["message"] == expected_message

  exc3 = PermissionDenied()
  response3 = justwon_exception_handler(exc3, None)

  assert response3.status_code == 403
  assert response3.data["code"] == expected_code
  assert response3.data["message"] == expected_message


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
  assert response.data["message"] == "error1"


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


def test_other_drf_exception_handler():
  exc = APIException("다른 DRF 예외")
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 500
  assert response.data["code"] == "SERVER_ERROR"
  assert response.data["message"] == "서버에서 알 수 없는 오류가 발생했습니다."
