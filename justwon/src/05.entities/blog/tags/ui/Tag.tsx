import { TagType } from "../models/tags";
import { Badge } from "@shared/ui/Badge";

interface Props {
  tag: TagType;
  isActive?: boolean;
}

export function TagBadge({ tag, isActive }: Readonly<Props>) {
  return (
    <Badge
      label={tag.name}
      icon={tag.icon}
      color={isActive ? tag.color : `${tag.color}50`}
      backgroundColor={`${tag.color}20`}
    />
  );
}
