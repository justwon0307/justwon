"use client";

import { useCallback, useMemo, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";

import { GlobalStyles } from "./global.styles";
import { ColorContext, darkTheme, lightTheme } from "@shared/lib/colors";

interface Props {
  children: React.ReactNode;
}

export function StylesProvider({
  children,
}: Readonly<Props>): React.JSX.Element {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  const colors = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme;
  }, [isDarkMode]);

  const value = useMemo(
    () => ({ colors, isDarkMode, toggleTheme }),
    [colors, isDarkMode, toggleTheme]
  );

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={{ colors: colors }}>
        <ColorContext.Provider value={value}>
          <GlobalStyles />
          {children}
        </ColorContext.Provider>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
