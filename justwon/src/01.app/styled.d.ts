import "styled-components";

import { ThemeColorType } from "@shared/lib/colors";
import { BreakPointsType } from "@shared/lib/styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColorType;
    breakpoints: BreakPointsType;
  }
}
