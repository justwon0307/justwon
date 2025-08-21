import Justwon from "./files/justwon.svg";
import JustwonHorizontal from "./files/justwon-horizontal.svg";

interface Props {
  size?: number;
}

export function Logo({ size = 24 }: Readonly<Props>) {
  return <Justwon width={size} height={size} />;
}

export function LogoHorizontal({ size = 24 }: Readonly<Props>) {
  return <JustwonHorizontal height={size} width="100%" />;
}
