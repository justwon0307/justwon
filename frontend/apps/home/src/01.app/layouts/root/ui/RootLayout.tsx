import { ReactNode } from "react";
import { Google_Sans } from "next/font/google";
import { ThemeProvider, ThemeScript } from "@justwon/designs/theme";
import "@justwon/designs/globals.css";

import { RootHeader } from "@widgets/header";
import { styles } from "./styles.css";

const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${googleSans.className}`}>
        <ThemeProvider>
          <RootHeader />
          <div className={styles.content}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
