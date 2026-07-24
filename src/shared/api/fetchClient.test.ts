import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchClient } from "./fetchClient";

afterEach(() => {
    vi.restoreAllMocks();
});

describe("fetchClient", () => {
    it("joins base URL with endpoint and returns response", async () => {
        const response = new Response(null, { status: 200 });
        const fetchMock = vi
            .spyOn(globalThis, "fetch")
            .mockResolvedValue(response);

        const result = await fetchClient("/pets");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://localhost:3000/pets",
            {
                headers: expect.any(Headers),
            }
        );
        expect(result).toBe(response);
    });
});