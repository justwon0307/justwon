import Admin from "../files/admin-logo.svg";
import Github from "../files/github.svg";
import Google from "../files/google.svg";

interface Props {
  name: string;
  size?: number;
}

const logoMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  admin: Admin,
  github: Github,
  google: Google,
};

export function Logo({ name, size = 24 }: Readonly<Props>) {
  const Component = logoMap[name];

  if (!Component) {
    return null;
  }

  return <Component width={size} height={size} />;
}
