import { AboutIcon } from "./components/AboutIcon";
import { BlogIcon } from "./components/BlogIcon";
import { NonDevIcon } from "./components/NonDevIcon";
import { ProjectsIcon } from "./components/ProjectsIcon";
import { IconProps } from "../types";

interface Props extends IconProps {
  tab: "about" | "devlog" | "non-dev" | "projects";
}

export function TabIcon({ tab, size = 24, ...rest }: Readonly<Props>) {
  if (tab === "about") return <AboutIcon size={size} {...rest} />;
  if (tab === "devlog") return <BlogIcon size={size} {...rest} />;
  if (tab === "non-dev") return <NonDevIcon size={size} {...rest} />;
  return <ProjectsIcon size={size} {...rest} />;
}
