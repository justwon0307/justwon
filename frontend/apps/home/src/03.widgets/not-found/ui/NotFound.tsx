"use client";

import {
  containerStyle,
  titleStyle,
  infoBoxStyle,
  messageStyle,
  linkStyle,
} from "./styles.css";
import { Link } from "@shared/ui/Link";
import { Text } from "@shared/ui/Text";

interface Props {
  message?: string;
  reloadText?: string;
  href?: string;
}

/**
 * 간단하게 사용할 수 있는 범용 404 Not Found 컴포넌트.
 * @property message - 표시할 오류 메시지, 기본값: "죄송합니다. 찾고 있는 페이지가 존재하지 않습니다."
 * @property reloadText - 링크 텍스트, 기본값: "홈으로 돌아가기"
 * @property href - 리디렉션 링크 URL, 기본값: "/"
 */
export function NotFound({
  message = "죄송합니다. 찾고 있는 페이지가 존재하지 않습니다.",
  reloadText = "홈으로 돌아가기",
  href = "/",
}: Readonly<Props>) {
  return (
    <div className={containerStyle}>
      <Text variant="titleLarge" className={titleStyle}>
        404
      </Text>
      <div className={infoBoxStyle}>
        <p className={messageStyle}>{message}</p>
        <Link href={href} passHref className={linkStyle}>
          {reloadText}
        </Link>
      </div>
    </div>
  );
}
