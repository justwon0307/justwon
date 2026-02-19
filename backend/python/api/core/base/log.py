import logging

logger = logging.getLogger(__name__)


def log(message: str, level: str = "error"):
  """
  서버 오류 메시지를 로그에 기록하는 헬퍼 함수.
  로그 레벨은 error, warning, info 중 하나로 지정할 수 있다.
  기본값은 error.
  """
  if level == "error":
    logger.error(f"서버 오류 발생: {message}")
  elif level == "warning":
    logger.warning(f"서버 경고 발생: {message}")
  else:
    logger.info(f"서버 정보: {message}")
