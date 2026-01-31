const breakpoints = {
  mobile: "768px",
  tablet: "1024px",
};

export const mediaQueries = {
  breakpoints: {
    mobile: `screen and (max-width: ${breakpoints.mobile})`,
    tablet: `screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
    desktop: `screen and (min-width: ${breakpoints.tablet})`,
    mobile_tablet: `screen and (max-width: ${breakpoints.tablet})`,
    tablet_desktop: `screen and (min-width: ${breakpoints.mobile})`,
  },
  motion: {
    reduce: "(prefers-reduced-motion: reduce)", // 애니메이션을 끄거나 단순화할 때
  },
  interaction: {
    hover: "(hover: hover)", // 호버 가능한 장치 (예: 마우스)
    touch: "(pointer: coarse)", // 터치 전용 장치 (예: 스마트폰)
  },
} as const;
