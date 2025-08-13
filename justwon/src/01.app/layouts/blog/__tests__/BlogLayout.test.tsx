/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, waitFor } from "@testing-library/react";
import * as NextJSNavigationAPI from "next/navigation";
import * as ClerkAPI from "@clerk/nextjs";

import { BlogLayout } from "@app/layouts/blog";
import {
  initializeBlog,
  sampleBlogInitializerResponse,
} from "@features/blog/initialize-blog";
import { APIError } from "@shared/api/models";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

jest.mock("@features/blog/initialize-blog", () => {
  const originalModule = jest.requireActual("@features/blog/initialize-blog");
  return {
    ...originalModule,
    initializeBlog: jest.fn(),
  };
});

describe("BlogLayout", () => {
  const render = async () => {
    const element = await getElementFromAsyncServerComponent(BlogLayout, {
      children: <div>Test Content</div>,
      modal: <div>Test Modal</div>,
    });

    return renderWithProviders(element);
  };

  beforeEach(() => {
    jest
      .spyOn(NextJSNavigationAPI, "usePathname")
      .mockReturnValue("/blog/web-development/frontend");
    jest.spyOn(NextJSNavigationAPI, "useRouter").mockReturnValue({
      push: jest.fn(),
    } as any);
  });
  it("fetches categories data successfully (not logged in)", async () => {
    (initializeBlog as jest.Mock).mockResolvedValue(
      sampleBlogInitializerResponse
    );
    jest.spyOn(ClerkAPI, "useUser").mockReturnValue({
      isSignedIn: false,
      isLoaded: true,
      user: null,
    });

    const { getByText, getByTestId, queryByText } = await render();

    expect(queryByText("포스트 작성")).not.toBeInTheDocument();
    expect(queryByText("관리자 메뉴")).not.toBeInTheDocument();

    fireEvent.click(getByText("Frontend"));
    fireEvent.click(getByTestId("Web Development-menu"));

    await waitFor(() => {
      expect(NextJSNavigationAPI.useRouter().push).toHaveBeenCalledWith(
        "/blog/web-development/frontend/"
      );
    });
  });

  it("fetches categories data successfully (logged in)", async () => {
    (initializeBlog as jest.Mock).mockResolvedValue(
      sampleBlogInitializerResponse
    );
    jest.spyOn(ClerkAPI, "useUser").mockReturnValue({
      user: {
        publicMetadata: { role: "admin" },
      },
    } as any);

    const { getByText } = await render();

    expect(getByText("포스트 작성")).toBeInTheDocument();
    expect(getByText("관리자 메뉴")).toBeInTheDocument();
  });

  it("handles data fetch error correctly", async () => {
    // empty array error
    (initializeBlog as jest.Mock).mockRejectedValue(
      new APIError("블로그 초기화 데이터를 불러오는 중 오류가 발생했습니다.")
    );

    const { getByText } = await render();

    expect(
      getByText("블로그 초기화 데이터를 불러오는 중 오류가 발생했습니다.")
    ).toBeInTheDocument();
  });

  it("handles unknown error correctly", async () => {
    (initializeBlog as jest.Mock).mockRejectedValue(new Error("Unknown error"));

    const { getByText } = await render();

    expect(
      getByText("데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.")
    ).toBeInTheDocument();
  });
});
