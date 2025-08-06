import { LearningRootLayout } from "@app/layouts/learning";
import { sampleCategoryGroups } from "@entities/learning";
import { renderWithProvidersAsync } from "@test-utils/renderer";

describe("LearningLayout", () => {
  const render = async () => {
    return await renderWithProvidersAsync(LearningRootLayout, {
      children: <div>Test Content</div>,
    });
  };

  it("fetches categories data successfully", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(sampleCategoryGroups),
    });

    await render();
  });

  it("handles bad response from server", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 400,
      json: jest.fn().mockResolvedValue({ message: "Bad request" }),
    });

    await render();
  });

  it("hanldes non-array response", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ message: "Not an array" }),
    });

    await render();
  });

  it("handles empty data response", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([]),
    });

    await render();
  });

  it("handles unknown error", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    await render();
  });
});
