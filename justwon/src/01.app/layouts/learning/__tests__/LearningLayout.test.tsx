import { waitFor } from "@testing-library/react";

import { LearningLayout } from "@app/layouts/learning";
import { sampleCategoryGroups } from "@entities/learning";
import { renderWithProvidersAsync } from "@test-utils/renderer";

describe("LearningLayout", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const render = async () => {
    return await renderWithProvidersAsync(LearningLayout, {
      children: <div>Test Content</div>,
    });
  };

  it("renders sidebar correctly with categories", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(sampleCategoryGroups),
    });

    const { getByText } = await render();

    await waitFor(() => {
      expect(getByText("Learning")).toBeInTheDocument();
    });
  });

  it("handles unexpected error gracefully", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    const { getByText } = await render();

    await waitFor(() => {
      expect(
        getByText("서버와의 연결에 실패했습니다. 나중에 다시 시도해주세요.")
      ).toBeInTheDocument();
    });
  });

  it("handles empty category groups", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([]),
    });

    const { getByText } = await render();

    await waitFor(() => {
      expect(getByText("카테고리 데이터가 없습니다.")).toBeInTheDocument();
    });
  });

  it("handles invalid data format", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ invalid: "data" }),
    });

    const { getByText } = await render();

    await waitFor(() => {
      expect(getByText("데이터 형식이 올바르지 않습니다.")).toBeInTheDocument();
    });
  });

  it("handles server error response", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
      json: jest.fn().mockResolvedValue({ message: "Server error" }),
    });

    const { getByText } = await render();

    await waitFor(() => {
      expect(
        getByText(
          "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요."
        )
      ).toBeInTheDocument();
    });
  });
});
