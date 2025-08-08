/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, waitFor } from "@testing-library/react";
import * as NextJSNavigationAPI from "next/navigation";
import * as ClerkAPI from "@clerk/nextjs";

import { BlogReadLayout } from "@app/layouts/blog";
import { BlogProvider, sampleCategoryGroups } from "@entities/blog";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("BlogReadLayout", () => {
  const render = async () => {
    // wrap with provider for context

    const element = await getElementFromAsyncServerComponent(BlogReadLayout, {
      children: <div>Test Content</div>,
    });

    return renderWithProviders(
      <BlogProvider initialCategoryGroups={sampleCategoryGroups}>
        {element}
      </BlogProvider>
    );
  };

  beforeEach(() => {
    jest.spyOn(NextJSNavigationAPI, "usePathname").mockReturnValue("/blog");
    jest.spyOn(NextJSNavigationAPI, "useRouter").mockReturnValue({
      push: jest.fn(),
    } as any);
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(sampleCategoryGroups),
    });
  });

  it("renders in guest mode correctly", async () => {
    jest.spyOn(ClerkAPI, "useUser").mockReturnValue({
      isSignedIn: false,
      isLoaded: true,
      user: null,
    });

    const { getByText, queryByText } = await render();
    expect(getByText("Blog")).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();

    expect(queryByText("포스트 작성")).not.toBeInTheDocument();

    fireEvent.click(getByText("Frontend"));

    await waitFor(() => {
      expect(NextJSNavigationAPI.useRouter().push).toHaveBeenCalledWith(
        "/blog/web-development/frontend/"
      );
    });
  });

  it("renders admin mode and handles create click correctly", async () => {
    jest
      .spyOn(NextJSNavigationAPI, "usePathname")
      .mockReturnValue("/blog/web-development/frontend");
    jest.spyOn(ClerkAPI, "useUser").mockReturnValue({
      user: {
        publicMetadata: { role: "admin" },
      },
    } as any);

    const { getByText } = await render();
    expect(getByText("Blog")).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();
    expect(getByText("포스트 작성")).toBeInTheDocument();

    fireEvent.click(getByText("포스트 작성"));
  });
});
