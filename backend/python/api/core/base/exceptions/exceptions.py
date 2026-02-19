from rest_framework import status
from rest_framework.exceptions import APIException
from rest_framework.response import Response

from base.log import log

from .responses import unknown_error_response


class JustWonException(APIException):
  """
  JustWon API 예외의 기본 클래스.
  """

  def error_response(self):
    raise NotImplementedError(
      "get_error_response 메서드는 서브클래스에서 구현되어야 합니다."
    )

  def get_error_response(self):
    try:
      return self.error_response()
    except NotImplementedError:
      log("error_response 메서드가 구현되지 않았습니다.")
      return unknown_error_response()


class ServerError(JustWonException):
  """
  서버에만 오류를 로그하고, 클라이언트에는 구체적인 메시지를 숨기는 예외 클래스.
  """

  status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
  default_detail = "서버 오류"

  def __init__(self, detail=None, code=None):
    # detail을 메시지로 설정하는 것이 아니라, 로그를 남기는 방식으로 변경한다
    if detail is not None:
      log(f"서버 오류 발생: {detail}")
    else:
      log("서버 오류 발생: 상세 정보 없음")

    super().__init__(detail=self.default_detail)

  def error_response(self):
    return unknown_error_response()


class AuthenticationError(JustWonException):
  """
  로그인 실패 시 발생하는 예외 클래스.
  """

  status_code = status.HTTP_401_UNAUTHORIZED
  default_detail = "인증에 실패했습니다."

  def error_response(self):
    data = {
      "code": "UNAUTHORIZED",
      "message": self.detail,
    }
    return Response(data, status=self.status_code)
