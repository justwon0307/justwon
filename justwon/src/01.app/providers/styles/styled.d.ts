import "styled-components";

import { ThemeColorType } from "@shared/lib/colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColorType;
    breakpoints: {
      mobile: string;
      tablet: string;
    };
  }
}
