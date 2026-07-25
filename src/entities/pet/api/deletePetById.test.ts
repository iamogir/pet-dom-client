import { afterEach, describe, expect, it, vi } from "vitest";
import { deletePetById } from "./deletePetById";

afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

describe("deletePetById", () => {
    it("returns the deleted pet from server response", async () => {
        vi.stubGlobal("localStorage", {
            getItem: vi.fn().mockReturnValue(null),
        });

        const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
            new Response(
                JSON.stringify({
                    id: "pet-1",
                    name: "Mika",
                    species: "dog",
                    birthDate: "2022-05-10",
                }),
                {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
        );

        const result = await deletePetById("pet-1");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://localhost:3000/pet/pet-1",
            expect.objectContaining({
                method: "DELETE",
            })
        );

        expect(result).toEqual({
            id: "pet-1",
            name: "Mika",
            species: "dog",
            birthDate: new Date("2022-05-10"),
        });
    });
});