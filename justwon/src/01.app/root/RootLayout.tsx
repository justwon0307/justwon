import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { RootHeader } from "./ui/RootHeader";
import { ClerkProvider, StylesProvider } from "@app/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
