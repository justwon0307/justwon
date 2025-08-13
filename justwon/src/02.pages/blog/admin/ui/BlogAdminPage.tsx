import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "블로그 관리",
};

export function BlogAdminPage() {
  return (
    <div>
      <h1>블로그 관리 페이지</h1>
      <p>여기서 블로그 게시물을 관리할 수 있습니다.</p>
    </div>
  );
}
