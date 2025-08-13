import { ErrorFallback } from "@widgets/error";
import { BlogProvider, initializeBlog } from "@features/blog/initialize-blog";
import { APIError } from "@shared/api/models";

/**
 * 블로그 섹션 전역에서 필요한 기본 데이터를 가져오는 레이아웃 컴포넌트
 */

export async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    const data = await initializeBlog();

    return <BlogProvider data={data}>{children}</BlogProvider>;
  } catch (error: unknown) {
    return (
      <ErrorFallback
        message={
          error instanceof APIError
            ? error.message
            : "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요."
        }
      />
    );
  }
}
