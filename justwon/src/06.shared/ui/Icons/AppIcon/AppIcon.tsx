"use client";

import { useColors } from "@shared/lib/colors";

import About from "./files/about.svg";
import Admin from "./files/admin.svg";
import Blog from "./files/blog.svg";
import ChevronDown from "./files/chevron-down.svg";
import ChevronLeft from "./files/chevron-left.svg";
import ChevronRight from "./files/chevron-right.svg";
import ChevronUp from "./files/chevron-up.svg";
import Lightbulb from "./files/lightbulb.svg";
import Login from "./files/login.svg";
import Logout from "./files/logout.svg";
import Projects from "./files/projects.svg";
import Search from "./files/search.svg";

interface Props {
  icon: string;
  size?: number;
  color?: string;
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  about: About,
  blog: Blog,
  //"chevron-down": ChevronDown,
  //"chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  //"chevron-up": ChevronUp,
  lightbulb: Lightbulb,
  login: Login,
  projects: Projects,
};

export function AppIcon({ icon, size = 24, color }: Readonly<Props>) {
  const { colors } = useColors();

  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    console.warn(`AppIcon: No icon found for name "${icon}"`);

    return null;
  }

  const iconColor = color ?? colors.gray900;

  return <IconComponent width={size} height={size} color={iconColor} />;
}
