import { BrainIcon } from "./components/BrainIcon";
import { DashboardIcon } from "./components/DashboardIcon";
import { DecisionIcon } from "./components/DecisionIcon";
import { DiagnosisIcon } from "./components/DiagnosisIcon";
import { DocumentIcon } from "./components/DocumentIcon";
import { HistoryIcon } from "./components/HistoryIcon";
import { MonitorIcon } from "./components/MonitorIcon";
import { IconProps } from "./types";

interface Props extends IconProps {
  icon:
    | "brain"
    | "dashboard"
    | "decision"
    | "diagnosis"
    | "document"
    | "history"
    | "monitor";
}

export function BlogIcon({ icon, ...props }: Readonly<Props>) {
  switch (icon) {
    case "brain":
      return <BrainIcon {...props} />;
    case "dashboard":
      return <DashboardIcon {...props} />;
    case "decision":
      return <DecisionIcon {...props} />;
    case "diagnosis":
      return <DiagnosisIcon {...props} />;
    case "document":
      return <DocumentIcon {...props} />;
    case "history":
      return <HistoryIcon {...props} />;
    case "monitor":
      return <MonitorIcon {...props} />;
  }
}
