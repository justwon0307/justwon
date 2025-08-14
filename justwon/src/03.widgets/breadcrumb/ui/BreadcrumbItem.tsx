import Link from "next/link";

import { Item } from "./styles";
import { AppIcon } from "@shared/ui/Icons";

export type BreadcrumbItemType = {
  label: string;
  href: string;
};

interface Props {
  item: BreadcrumbItemType;
  isLastItem?: boolean;
}

export function BreadcrumbItem({ item, isLastItem = false }: Readonly<Props>) {
  return (
    <Item>
      {isLastItem ? (
        <span className="current">{item.label}</span>
      ) : (
        <Link href={item.href}>{item.label}</Link>
      )}
      {!isLastItem && <AppIcon icon="chevron-right" size={16} />}
    </Item>
  );
}
