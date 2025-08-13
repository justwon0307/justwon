import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import axios from "axios";

import { ClerkProvider, StylesProvider } from "@app/providers";
import { RootHeader } from "@widgets/header";
import { getToken } from "@shared/lib/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * 해당 App에서는 axios를 개인화된 요청이 필요할 때만 사용한다.
 *   - 예시: Bookmarks, 댓글 목록 등
 *   - 이외의 경우는 fetch를 사용한다.
 */

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.timeout = 2000; // 2 seconds
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["X-JustWon-Client"] = "justwon-web";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(async (request) => {
  const token = await getToken();

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

export const metadata: Metadata = {
  title: "JustWon",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <StylesProvider>
            <RootHeader />
            {children}
          </StylesProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
