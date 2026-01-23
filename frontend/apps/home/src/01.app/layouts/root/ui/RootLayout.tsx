import { ReactNode } from "react";

import { ThemeProvider, ThemeScript } from "@justwon/theme";
import "@justwon/styles/index.css";

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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
