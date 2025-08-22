import { NotFoundPageWidget } from "@widgets/not-found";

export default function RootNotFound() {
  return (
    <NotFoundPageWidget
      message="존재하지 않는 페이지입니다."
      reloadText="블로그 홈으로 이동"
      href="/blog"
    />
  );
}
