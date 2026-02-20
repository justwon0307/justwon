from base.log import log


def test_log_error(exception_logs):
  log("테스트 에러 메시지")
  assert "서버 오류 발생: 테스트 에러 메시지" in exception_logs.text


def test_log_warning(warning_logs):
  log("테스트 경고 메시지", level="warning")
  assert "서버 경고 발생: 테스트 경고 메시지" in warning_logs.text


def test_log_info(info_logs):
  log("테스트 정보 메시지", level="info")
  assert "서버 정보: 테스트 정보 메시지" in info_logs.text
