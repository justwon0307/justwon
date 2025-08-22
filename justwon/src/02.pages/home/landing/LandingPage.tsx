import { DefaultLayout } from "@widgets/containers";

/**
 * url: /
 * 랜딩페이지.
 * - 간단한 인삿말
 * - Recent Posts
 * - Hot Posts
 * - Ads (수익 창출용)
 */

export function LandingPage() {
  return (
    <DefaultLayout>
      <h1>Welcome to JustWon</h1>
      <p>Your journey starts here.</p>
    </DefaultLayout>
  );
}
