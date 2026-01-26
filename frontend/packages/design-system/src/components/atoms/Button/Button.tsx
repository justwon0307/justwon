import { buttonDefaultStyle } from "./styles.css";

/**
 * 기본 스타일이 적용된 버튼 컴포넌트.
 * 스타일을 확장하려면, className prop을 사용하면 된다
 * override할 시 `.css.ts` 파일에서 layer를 사용할 필요가 없다. 단순 선언만 해도 override 된다.
 */
export function Button({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={
        className ? `${buttonDefaultStyle} ${className}` : buttonDefaultStyle
      }
      {...props}
    />
  );
}
