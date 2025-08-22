import { Suspense } from "react";
import type { Metadata } from "next";

import { StylesProvider } from "./providers";
import { RootHeader } from "@widgets/headers";
import { geistMono, geistSans } from "@shared/lib/fonts";

export const metadata: Metadata = {
  title: "JustWon",
  description: "",
};

export async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StylesProvider>
          <RootHeader />
          <Suspense>{children}</Suspense>
        </StylesProvider>
      </body>
    </html>
  );
}
