import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { usePathname } from "next/navigation";

import { MainTab } from "@entities/app/tabs";

describe("MainTab", () => {
  it("should render correctly when active", () => {
    const tab = "projects";
    const pathname = `/${tab}/overview`;

    // Mock usePathname to return the active path
    vi.mocked(usePathname).mockReturnValue(pathname);

    const { getByText } = render(<MainTab tab={tab} />);
    const tabElement = getByText("Projects");

    expect(tabElement.className).toContain("active");
  });

  it("should render correctly when inactive", () => {
    const tab = "devlog";
    const pathname = `/dashboard/overview`;

    // Mock usePathname to return an inactive path
    vi.mocked(usePathname).mockReturnValue(pathname);

    const { getByText } = render(<MainTab tab={tab} />);
    const tabElement = getByText("Devlog");

    expect(tabElement.className).toContain("inactive");
  });
});
