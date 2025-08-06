/* eslint-disable @typescript-eslint/no-explicit-any */
import { waitFor } from "@testing-library/react";
import * as NextJSNavigationAPI from "next/navigation";
import * as ClerkAPI from "@clerk/nextjs";

import { LearningReadLayout } from "@app/layouts/learning";
import { LearningProvider, sampleCategoryGroups } from "@entities/learning";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("LearningReadLayout", () => {
  const render = async () => {
    // wrap with provider for context

    const element = await getElementFromAsyncServerComponent(
      LearningReadLayout,
      {
        children: <div>Test Content</div>,
      }
    );

    return renderWithProviders(
      <LearningProvider initialCategoryGroups={sampleCategoryGroups}>
        {element}
      </LearningProvider>
    );
  };

  beforeEach(() => {
    jest.spyOn(NextJSNavigationAPI, "usePathname").mockReturnValue("/learning");
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
    expect(getByText("Learning")).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();

    expect(queryByText("포스트 작성")).not.toBeInTheDocument();
  });

  it("renders admin mode and handles create click correctly", async () => {
    jest.spyOn(ClerkAPI, "useUser").mockReturnValue({
      user: {
        publicMetadata: { role: "admin" },
      },
    } as any);

    const { getByText } = await render();

    await waitFor(() => {
      expect(getByText("포스트 작성")).toBeInTheDocument();
    });
  });
});
