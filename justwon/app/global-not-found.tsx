import Link from "next/link";

import { ErrorWrapper } from "@widgets/layouts";

export default function GlobalNotFound() {
  return (
    <ErrorWrapper>
      <h1>404: Page Not Found</h1>
      <p>죄송합니다. 찾고 있는 페이지가 존재하지 않습니다.</p>
      <Link href="/" passHref>
        홈으로 돌아가기
      </Link>
    </ErrorWrapper>
  );
}
