import NextLink from "next/link";
import { clsx } from "clsx";

import { styles } from "./styles.css";

/**
 * 기본 스타일이 적용된 Next.js Link 컴포넌트 래퍼.
 * 스타일을 확장하려면, className prop을 사용하면 된다
 * override할 시 `.css.ts` 파일에서 layer를 사용할 필요가 없다. 단순 선언만 해도 override 된다.
 */
export function Link({
  className,
  ...props
}: React.ComponentProps<typeof NextLink>) {
  return <NextLink className={clsx(styles.link, className)} {...props} />;
}
