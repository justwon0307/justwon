from base.exceptions.exceptions import JustWonException, ServerError
from base.exceptions.handler import justwon_exception_handler


def test_not_implemented_error_response(exception_logs):
  ## error_response 메서드를 구현하지 않았어도,
  ## 클라이언트로는 기본 서버 오류 메시지가 반환되어야 한다
  class CustomException(JustWonException):
    pass

  exc = CustomException("테스트 예외")
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 500
  assert response.data["code"] == "SERVER_ERROR"
  assert response.data["message"] == "서버에서 알 수 없는 오류가 발생했습니다."
  assert "error_response 메서드가 구현되지 않았습니다." in exception_logs.text


def test_server_error_logs_detail(exception_logs):
  ## ServerError를 생성할 때 detail을 전달하면, 로그에 해당 메시지가 남아야 한다
  exc = ServerError("서버 오류 상세 메시지")
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 500
  assert response.data["code"] == "SERVER_ERROR"
  assert response.data["message"] == "서버에서 알 수 없는 오류가 발생했습니다."
  assert "서버 오류 발생: 서버 오류 상세 메시지" in exception_logs.text


def test_server_error_logs_no_detail(exception_logs):
  ## ServerError를 생성할 때 detail을 전달하지 않아도,
  ## 로그에는 오류 발생이 기록되어야 한다
  exc = ServerError()
  response = justwon_exception_handler(exc, None)

  assert response.status_code == 500
  assert response.data["code"] == "SERVER_ERROR"
  assert response.data["message"] == "서버에서 알 수 없는 오류가 발생했습니다."
  assert "서버 오류 발생: 상세 정보 없음" in exception_logs.text
