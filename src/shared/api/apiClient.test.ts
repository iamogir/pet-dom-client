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
});