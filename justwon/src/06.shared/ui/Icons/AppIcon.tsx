import About from "./files/about.svg";
import Blog from "./files/blog.svg";
import Project from "./files/project.svg";
import Study from "./files/study.svg";

interface Props {
  icon: string;
  size?: number;
  color?: string;
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  about: About,
  blog: Blog,
  project: Project,
  study: Study,
};

export function AppIcon({
  icon,
  size = 24,
  color = "currentColor",
}: Readonly<Props>) {
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} fill={color} />;
}
