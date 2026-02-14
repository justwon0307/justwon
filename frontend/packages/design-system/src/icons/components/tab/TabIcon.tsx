import { AboutIcon } from "./components/AboutIcon";
import { BlogIcon } from "./components/BlogIcon";
import { CoffeeIcon } from "./components/CoffeeIcon";
import { ProjectsIcon } from "./components/ProjectsIcon";
import { IconProps } from "../types";

interface Props extends IconProps {
  tab: "about" | "devlog" | "lounge" | "projects";
}

export function TabIcon({ tab, ...rest }: Readonly<Props>) {
  const iconSize = 20;

  if (tab === "about") return <AboutIcon size={iconSize} {...rest} />;
  if (tab === "devlog") return <BlogIcon size={iconSize} {...rest} />;
  if (tab === "lounge") return <CoffeeIcon size={iconSize} {...rest} />;
  return <ProjectsIcon size={iconSize} {...rest} />;
}
