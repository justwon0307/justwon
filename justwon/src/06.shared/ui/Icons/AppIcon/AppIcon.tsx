"use client";

import { useColors } from "@shared/lib/colors";

import About from "../files/about.svg";
import Admin from "../files/admin.svg";
import Algorithms from "../files/algorithms.svg";
import ArrowLeft from "../files/arrow-left.svg";
import ArrowRight from "../files/arrow-right.svg";
import Blog from "../files/blog.svg";
import Brain from "../files/brain.svg";
import ChevronDown from "../files/chevron-down.svg";
import ChevronLeft from "../files/chevron-left.svg";
import ChevronRight from "../files/chevron-right.svg";
import ChevronUp from "../files/chevron-up.svg";
import Chip from "../files/chip.svg";
import Computer from "../files/computer.svg";
import DataStructure from "../files/data-structure.svg";
import Database from "../files/database.svg";
import Login from "../files/login.svg";
import Logout from "../files/logout.svg";
import Network from "../files/network.svg";
import Pencil from "../files/pencil.svg";
import Profile from "../files/profile.svg";
import Projects from "../files/projects.svg";
import Search from "../files/search.svg";
import System from "../files/system.svg";
import Workout from "../files/workout.svg";

interface Props {
  icon: string;
  size?: number;
  color?: string;
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  about: About,
  admin: Admin,
  algorithms: Algorithms,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  blog: Blog,
  brain: Brain,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  chip: Chip,
  computer: Computer,
  "data-structure": DataStructure,
  database: Database,
  login: Login,
  logout: Logout,
  network: Network,
  pencil: Pencil,
  profile: Profile,
  projects: Projects,
  search: Search,
  system: System,
  workout: Workout,
};

export function AppIcon({ icon, size = 24, color }: Readonly<Props>) {
  const { colors } = useColors();

  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    return null;
  }

  const iconColor = color ?? colors.gray900;

  return <IconComponent width={size} height={size} color={iconColor} />;
}
