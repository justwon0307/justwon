"use client";

import { useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import {
  ColorContext,
  type ColorContextType,
  darkTheme,
  lightTheme,
} from "@shared/lib/colors";
import {
  GlobalStyles,
  StyledComponentsRegistry,
  breakpoints,
} from "@shared/lib/styled-components";

interface Props {
  children: React.ReactNode;
}

/**
 * styled-components를 SSR에서 사용하기 위한 레지스트리 컴포넌트를 감싸고 있으며,
 * 커스텀 테마를 적용하는 프로바이더.
 */

export function StylesProvider({
  children,
}: Readonly<Props>): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  const colors = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme;
  }, [isDarkMode]);

  const value = useMemo<ColorContextType>(
    () => ({ colors, isDarkMode, toggleTheme }),
    [colors, isDarkMode, toggleTheme]
  );

  // 클라이언트에서는 테마만 적용
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={{ colors, breakpoints }}>
        <ColorContext.Provider value={value}>
          <GlobalStyles />
          {children}
        </ColorContext.Provider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
