/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies as nextCookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import {
  createBrowserClient as supabaseBrowserFactory,
  createServerClient as supabaseServerFactory,
} from "@supabase/ssr";

import {
  createBrowserClient,
  createServerClient,
  updateSession,
} from "@shared/lib/supabase";

jest.mock("@supabase/ssr", () => ({
  createBrowserClient: jest.fn(),
  createServerClient: jest.fn(),
}));
jest.mock("next/headers", () => ({
  cookies: jest.fn(),
}));
jest.mock("next/server", () => ({
  NextResponse: { next: jest.fn() },
  NextRequest: jest.fn(),
}));
jest.unmock("@shared/lib/supabase");

describe("Supabase wrappers", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://supabase.example";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";
  });

  describe("createBrowserClient()", () => {
    it("forwards the correct URL & KEY and returns the factory result", () => {
      (supabaseBrowserFactory as jest.Mock).mockReturnValue({ foo: "bar" });

      const client = createBrowserClient();

      expect(supabaseBrowserFactory).toHaveBeenCalledWith(
        "https://supabase.example",
        "anon-key"
      );
      expect(client).toEqual({ foo: "bar" });
    });
  });

  describe("createServerClient()", () => {
    it("wraps cookies.getAll/set and delegates to the SSR factory", async () => {
      // 1) mock next/headers cookieStore
      const mockStore = {
        getAll: jest.fn(() => ["cookie1"]),
        set: jest.fn(),
      };
      (nextCookies as jest.Mock).mockResolvedValue(mockStore);

      // 2) have the supabase factory return a sentinel
      (supabaseServerFactory as jest.Mock).mockReturnValue({ server: "XYZ" });

      // 3) call your wrapper
      const client = await createServerClient();

      // 4) verify cookies() was called
      expect(nextCookies).toHaveBeenCalled();

      // 5) verify SSR factory was invoked with our envs + cookie callbacks
      expect(supabaseServerFactory).toHaveBeenCalledWith(
        "https://supabase.example",
        "anon-key",
        expect.objectContaining({
          cookies: expect.objectContaining({
            getAll: expect.any(Function),
            setAll: expect.any(Function),
          }),
        })
      );

      // 6) grab the passed‐in callbacks
      const { cookies: cookieFns } = (supabaseServerFactory as jest.Mock).mock
        .calls[0][2];

      // 7) test getAll() delegates
      expect(cookieFns.getAll()).toEqual(["cookie1"]);

      // 8) test setAll(...) loops through and calls store.set()
      cookieFns.setAll([{ name: "a", value: "b", options: { path: "/" } }]);
      expect(mockStore.set).toHaveBeenCalledWith("a", "b", { path: "/" });

      // 9) and finally returns the SSR client’s return value
      expect(client).toEqual({ server: "XYZ" });
    });

    it("silently swallows errors thrown by cookieStore.set", async () => {
      const badStore = {
        getAll: jest.fn(),
        set: jest.fn(() => {
          throw new Error("nope");
        }),
      };
      (nextCookies as jest.Mock).mockResolvedValue(badStore);
      (supabaseServerFactory as jest.Mock).mockReturnValue({ okay: true });

      await expect(createServerClient()).resolves.toEqual({ okay: true });

      const { cookies: cookieFns } = (supabaseServerFactory as jest.Mock).mock
        .calls[0][2];
      expect(() =>
        cookieFns.setAll([{ name: "x", value: "y", options: {} }])
      ).not.toThrow();
    });
  });

  describe("updateSession()", () => {
    it("creates a server client and calls getUser", async () => {
      const mockResponse = { ok: true };
      (NextResponse.next as jest.Mock).mockReturnValue(mockResponse);

      (supabaseServerFactory as jest.Mock).mockReturnValue({
        auth: { getUser: jest.fn() },
      });

      const request = new NextRequest("https://example.com");
      const response = await updateSession(request);

      expect(supabaseServerFactory).toHaveBeenCalledWith(
        "https://supabase.example",
        "anon-key",
        expect.objectContaining({
          cookies: expect.objectContaining({
            getAll: expect.any(Function),
            setAll: expect.any(Function),
          }),
        })
      );
      expect(response).toBe(mockResponse);
    });

    it("syncs request & response cookies when getUser triggers setAll", async () => {
      // 1) fake NextRequest with a cookies API
      const fakeReq = {
        cookies: {
          getAll: jest.fn(() => ["sess=old-val"]),
          set: jest.fn(),
        },
      } as unknown as NextRequest;

      // 2) prepare two fake NextResponse objects
      const initialRes = { cookies: { set: jest.fn() } };
      const updatedRes = { cookies: { set: jest.fn() } };

      // 3) mock NextResponse.next() to return initialRes first, then updatedRes
      (NextResponse.next as jest.Mock)
        .mockReturnValueOnce(initialRes)
        .mockReturnValueOnce(updatedRes);

      // 4) stub the Supabase factory so that getUser() calls our setAll callback
      let cookieFns: any;
      const getUserMock = jest.fn().mockImplementation(() => {
        // 4.1) call setAll with a new cookie
        cookieFns.getAll();
        cookieFns.setAll([
          { name: "sess", value: "new-val", options: { httpOnly: true } },
        ]);
      });
      (supabaseServerFactory as jest.Mock).mockImplementation(
        (_url, _key, opts) => {
          cookieFns = opts.cookies;
          return {
            auth: {
              getUser: getUserMock,
            },
          };
        }
      );

      // 5) run updateSession
      const result = await updateSession(fakeReq);

      // 6) verify the initial NextResponse.next() was called
      expect(NextResponse.next).toHaveBeenCalledWith({ request: fakeReq });

      // 7) verify request.cookies.set was called
      expect(fakeReq.cookies.set).toHaveBeenCalledWith("sess", "new-val");

      // 8) verify the final response (updatedRes) got its cookies.set called
      expect(updatedRes.cookies.set).toHaveBeenCalledWith("sess", "new-val", {
        httpOnly: true,
      });

      // 9) and confirm updateSession returns the updated response
      expect(result).toBe(updatedRes);
    });
  });
});
