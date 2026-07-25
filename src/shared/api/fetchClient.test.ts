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

    it("passes request options and custom headers to fetch", async () => {
        const response = new Response(null, { status: 200 });
        const fetchMock = vi
            .spyOn(globalThis, "fetch")
            .mockResolvedValue(response);

        const body = JSON.stringify({ name: "Mika" });

        await fetchClient("pets", {
            method: "POST",
            body,
            headers: {
                "X-Request-Id": "request-1",
            },
        });

        expect(fetchMock).toHaveBeenCalledWith(
            "http://localhost:3000/pets",
            expect.objectContaining({
                method: "POST",
                body,
                headers: expect.any(Headers),
            })
        );

        const requestOptions = fetchMock.mock.calls[0][1] as RequestInit;
        const headers = new Headers(requestOptions.headers);

        expect(headers.get("X-Request-Id")).toBe("request-1");
    });
});