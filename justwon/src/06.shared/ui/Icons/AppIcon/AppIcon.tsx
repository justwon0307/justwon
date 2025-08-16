"use client";

import { useColors } from "@shared/lib/colors";

import About from "../files/about.svg";
import Admin from "../files/admin.svg";
import Algorithms from "../files/algorithms.svg";
import ArrowLeft from "../files/arrow-left.svg";
import ArrowRight from "../files/arrow-right.svg";
import Article from "../files/article.svg";
import Baekjoon from "../files/baekjoon.svg";
import Blog from "../files/blog.svg";
import Blogs from "../files/blogs.svg";
import Book from "../files/book.svg";
import Brain from "../files/brain.svg";
import ChevronDown from "../files/chevron-down.svg";
import ChevronLeft from "../files/chevron-left.svg";
import ChevronRight from "../files/chevron-right.svg";
import ChevronUp from "../files/chevron-up.svg";
import Chip from "../files/chip.svg";
import Computer from "../files/computer.svg";
import DataStructure from "../files/data-structure.svg";
import Database from "../files/database.svg";
import Django from "../files/django.svg";
import Docker from "../files/docker.svg";
import Git from "../files/git.svg";
import Lightbulb from "../files/lightbulb.svg";
import Login from "../files/login.svg";
import Logout from "../files/logout.svg";
import Monitor from "../files/monitor.svg";
import Network from "../files/network.svg";
import NextJS from "../files/nextjs.svg";
import Notion from "../files/notion.svg";
import Operation from "../files/operation.svg";
import Others from "../files/others.svg";
import ReactIcon from "../files/react.svg";
import Resources from "../files/resources.svg";
import Paper from "../files/paper.svg";
import Pencil from "../files/pencil.svg";
import Profile from "../files/profile.svg";
import Projects from "../files/projects.svg";
import Search from "../files/search.svg";
import Server from "../files/server.svg";
import System from "../files/system.svg";
import Tools from "../files/tools.svg";
import Utilities from "../files/utilities.svg";
import Video from "../files/video.svg";
import VSCode from "../files/vscode.svg";
import Web from "../files/web.svg";
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
  article: Article,
  baekjoon: Baekjoon,
  blog: Blog,
  blogs: Blogs,
  book: Book,
  brain: Brain,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  chip: Chip,
  computer: Computer,
  "data-structure": DataStructure,
  database: Database,
  django: Django,
  docker: Docker,
  git: Git,
  lightbulb: Lightbulb,
  login: Login,
  logout: Logout,
  monitor: Monitor,
  network: Network,
  nextjs: NextJS,
  notion: Notion,
  operation: Operation,
  others: Others,
  paper: Paper,
  pencil: Pencil,
  profile: Profile,
  projects: Projects,
  react: ReactIcon,
  resources: Resources,
  search: Search,
  server: Server,
  system: System,
  tools: Tools,
  utilities: Utilities,
  video: Video,
  vscode: VSCode,
  web: Web,
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
