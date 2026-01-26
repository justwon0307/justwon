import { HTMLAttributes } from "react";

import { textStyles } from "./styles.css";
import { TagOptions, TypographyVariant } from "./types";

const defaultTagMap: Record<TypographyVariant, keyof TagOptions> = {
  titleLarge: "h1",
  titleSmall: "h2",
  bodyLarge: "p",
  bodySmall: "span",
};

interface Props extends HTMLAttributes<HTMLElement> {
  variant: TypographyVariant;
  as?: keyof TagOptions;
}

/**
 * 미리 정의된 스타일로 텍스트를 렌더링하는 다형성 타이포그래피 컴포넌트.
 * 기본 태그는 variant에 따라 결정되지만,
 * 텍스트의 의미에 따라 적절한 HTML 태그를 지정할 수 있다.
 * 커스텀 클래스 이름도 추가하여 스타일을 확장할 수 있다.
 * override 시 `css.ts`파일에서 단순 선언만 해도 적용된다.
 */
export function Text({
  variant,
  as,
  className,
  children,
  ...rest
}: Readonly<Props>) {
  const Component = as ?? defaultTagMap[variant];
  const mergedClassName = className
    ? `${textStyles[variant]} ${className}`
    : textStyles[variant];

  return (
    <Component className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
}
