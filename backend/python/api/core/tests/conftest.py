import logging

import pytest
from rest_framework.test import APIClient

_AUTH_CLIENT = "test-client"


@pytest.fixture()
def exception_logs(caplog):
  """
  테스트 중 발생한 예외 로그를 캡처하는 fixture.
  테스트에서 발생한 예외 로그를 검증할 때 사용한다.
  """
  with caplog.at_level(logging.ERROR, logger="base.exceptions.exceptions"):
    yield caplog


@pytest.fixture()
def api_client():
  return APIClient(HTTP_X_JUSTWON_CLIENT=_AUTH_CLIENT)


@pytest.fixture(autouse=True)
def allow_client(settings, monkeypatch):
  ## 모든 테스트에서 _AUTH_CLIENT를 허용된 클라이언트로 설정한다.
  settings.ALLOWED_AUTH_CLIENTS = [_AUTH_CLIENT]
  ## Throttle이 테스트에 영향을 주지 않도록 APIView의 클래스 속성을 직접 패치한다.
  ## settings.REST_FRAMEWORK을 변경하는 방식은 APIView.throttle_classes가
  ## 임포트 시점에 이미 설정되어 있어 효과가 없다.
  from rest_framework.views import APIView
  monkeypatch.setattr(APIView, "throttle_classes", [])
