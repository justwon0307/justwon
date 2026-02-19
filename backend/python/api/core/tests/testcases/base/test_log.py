from base.log import log


def test_log_error(caplog):
  with caplog.at_level("ERROR", logger="base.log"):
    log("테스트 에러 메시지")
    assert "서버 오류 발생: 테스트 에러 메시지" in caplog.text


def test_log_warning(caplog):
  with caplog.at_level("WARNING", logger="base.log"):
    log("테스트 경고 메시지", level="warning")
    assert "서버 경고 발생: 테스트 경고 메시지" in caplog.text


def test_log_info(caplog):
  with caplog.at_level("INFO", logger="base.log"):
    log("테스트 정보 메시지", level="info")
    assert "서버 정보: 테스트 정보 메시지" in caplog.text
