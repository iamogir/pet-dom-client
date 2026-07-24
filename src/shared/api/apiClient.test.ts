import { afterEach, describe, expect, it, vi } from "vitest";
import { apiClient } from "./apiClient";

afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

describe("apiClient", () => {
    it("returns parsed JSON for a successful response", async () => {
        vi.stubGlobal("localStorage", {
            getItem: vi.fn().mockReturnValue(null),
        });

        const responseData = {
            id: "pet-1",
            name: "Mika",
        };

        vi.spyOn(globalThis, "fetch").mockResolvedValue(
            new Response(JSON.stringify(responseData), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            })
        );

        const result = await apiClient<{
            id: string;
            name: string;
        }>("/pets/pet-1");

        expect(result).toEqual(responseData);
    });

    it("adds authorization header when token exists", async () => {
        vi.stubGlobal("localStorage", {
            getItem: vi.fn().mockReturnValue("token-123"),
        });

        const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
            new Response(JSON.stringify({}), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            })
        );

        await apiClient("/pets");

        const requestOptions = fetchMock.mock.calls[0][1] as RequestInit;
        const headers = new Headers(requestOptions.headers);

        expect(headers.get("Authorization")).toBe("Bearer token-123");
    });

    it("preserves an explicitly provided authorization header", async () => {
        vi.stubGlobal("localStorage", {
            getItem: vi.fn().mockReturnValue("stored-token"),
        });

        const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
            new Response(JSON.stringify({}), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            })
        );

        await apiClient("/pets", {
            headers: {
                Authorization: "Bearer custom-token",
            },
        });

        const requestOptions = fetchMock.mock.calls[0][1] as RequestInit;
        const headers = new Headers(requestOptions.headers);

        expect(headers.get("Authorization")).toBe("Bearer custom-token");
    });

    it("adds JSON content type for a regular request", async () => {
        vi.stubGlobal("localStorage", {
            getItem: vi.fn().mockReturnValue(null),
        });

        const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
            new Response(JSON.stringify({}), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            })
        );

        await apiClient("/pets", {
            method: "POST",
            body: JSON.stringify({
                name: "Mika",
            }),
        });

        const requestOptions = fetchMock.mock.calls[0][1] as RequestInit;
        const headers = new Headers(requestOptions.headers);

        expect(headers.get("Content-Type")).toBe("application/json");
    });
});