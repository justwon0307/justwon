"use client";

import { useColors } from "@shared/lib/colors";

import Algorithms from "./files/algorithms.svg";
import Article from "./files/article.svg";
import Blogs from "./files/blogs.svg";
import Book from "./files/book.svg";
import Brain from "./files/brain.svg";
import Chip from "./files/chip.svg";
import Computer from "./files/computer.svg";
import DataStructure from "./files/data-structure.svg";
import Database from "./files/database.svg";
import Django from "./files/django.svg";
import Monitor from "./files/monitor.svg";
import Network from "./files/network.svg";
import NextJS from "./files/nextjs.svg";
import Operation from "./files/operation.svg";
import Others from "./files/others.svg";
import Paper from "./files/paper.svg";
import Question from "./files/question.svg";
import ReactIcon from "./files/react.svg";
import Resources from "./files/resources.svg";
import Server from "./files/server.svg";
import System from "./files/system.svg";
import Tools from "./files/tools.svg";
import Utilities from "./files/utilities.svg";
import Video from "./files/video.svg";
import Web from "./files/web.svg";
import Workout from "./files/workout.svg";

interface Props {
  name: string;
  size?: number;
  isActive?: boolean;
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  algorithms: Algorithms,
  article: Article,
  blogs: Blogs,
  book: Book,
  brain: Brain,
  chip: Chip,
  computer: Computer,
  "data-structure": DataStructure,
  database: Database,
  django: Django,
  monitor: Monitor,
  network: Network,
  nextjs: NextJS,
  operation: Operation,
  others: Others,
  paper: Paper,
  question: Question,
  react: ReactIcon,
  resources: Resources,
  server: Server,
  system: System,
  tools: Tools,
  utilities: Utilities,
  video: Video,
  web: Web,
  workout: Workout,
};

export function MediaIcon({
  name,
  size = 24,
  isActive = false,
}: Readonly<Props>) {
  const { colors } = useColors();

  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`MediaIcon: No icon found for name "${name}"`);

    return null;
  }

  const iconColor = isActive ? colors.primary : colors.textPrimary;

  return <IconComponent width={size} height={size} color={iconColor} />;
}
