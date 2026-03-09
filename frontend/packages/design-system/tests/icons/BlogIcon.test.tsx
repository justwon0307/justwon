import { render } from "@testing-library/react";

import { BrainIcon } from "@/icons/components/blog/components/BrainIcon";
import { DashboardIcon } from "@/icons/components/blog/components/DashboardIcon";
import { DecisionIcon } from "@/icons/components/blog/components/DecisionIcon";
import { DiagnosisIcon } from "@/icons/components/blog/components/DiagnosisIcon";
import { DocumentIcon } from "@/icons/components/blog/components/DocumentIcon";
import { HistoryIcon } from "@/icons/components/blog/components/HistoryIcon";
import { MonitorIcon } from "@/icons/components/blog/components/MonitorIcon";

describe("BlogIcon", () => {
  it("should render all icons and handles size props correctly", () => {
    const { container } = render(
      <>
        <BrainIcon />
        <DashboardIcon />
        <DecisionIcon />
        <DiagnosisIcon />
        <DocumentIcon />
        <HistoryIcon />
        <MonitorIcon size={16} />
      </>,
    );
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(7);

    const brainIcon = icons[0];
    const monitorIcon = icons[6];

    // default size is 24
    expect(brainIcon.getAttribute("width")).toBe("24");
    expect(brainIcon.getAttribute("height")).toBe("24");

    expect(monitorIcon.getAttribute("width")).toBe("16");
    expect(monitorIcon.getAttribute("height")).toBe("16");
  });
});
