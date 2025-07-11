import { Geist, Geist_Mono } from "next/font/google";

import { metadata } from "@app/metadata";
import { StylesProvider } from "@app/providers";
import { RootHeader } from "@widgets/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata };

export default function RootLayout({
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
          {children}
        </StylesProvider>
      </body>
    </html>
  );
}
