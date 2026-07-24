import { afterEach, describe, expect, it, vi } from "vitest";
import {fromLocalCreatePetObject, fromServerArrayPetsObject, fromServerPetObject} from "entities/pet/lib/mapPetDto.ts";

afterEach(() => {
    vi.restoreAllMocks();
});

describe("fromServerPetObject", () => {
    it("maps pet DTO and converts birth date to Date", () => {
        const result = fromServerPetObject({
            id: "pet-1",
            name: "Mika",
            species: "dog",
            birthDate: "2022-05-10",
        });

        expect(result).toEqual({
            id: "pet-1",
            name: "Mika",
            species: "dog",
            birthDate: new Date("2022-05-10"),
        });
    });

    it("throws an error for invalid species from server", () => {
        expect(() =>
            fromServerPetObject({
                id: "pet-1",
                name: "Mika",
                species: "dinosaur",
            })
        ).toThrow("invalid species");
    });
});

describe("fromServerArrayPetsObject", () => {
    it("maps pets and preserves meta information", () => {
        const result = fromServerArrayPetsObject({
            data: [
                {
                    id: "pet-1",
                    name: "Mika",
                    species: "dog",
                    birthDate: "2022-05-10",
                },
            ],
            meta: {
                total: 1,
            },
        });

        expect(result).toEqual({
            data: [
                {
                    id: "pet-1",
                    name: "Mika",
                    species: "dog",
                    birthDate: new Date("2022-05-10"),
                },
            ],
            meta: {
                total: 1,
            },
        });
    });
});

describe("fromLocalCreatePetObject", () => {
    it("creates a local pet with generated id", () => {
        vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
            "00000000-0000-4000-8000-000000000001"
        );

        const result = fromLocalCreatePetObject({
            name: "Mika",
            species: "dog",
        });

        expect(result).toEqual({
            id: "00000000-0000-4000-8000-000000000001",
            name: "Mika",
            species: "dog",
        });
    });

    it("creates a local photo URL from avatar", () => {
        vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
            "00000000-0000-4000-8000-000000000001"
        );
        vi.spyOn(globalThis.URL, "createObjectURL").mockReturnValue(
            "blob:mika-avatar"
        );

        const avatar = new File(["avatar"], "mika.png", {
            type: "image/png",
        });

        const result = fromLocalCreatePetObject({
            name: "Mika",
            species: "dog",
            avatar,
        });

        expect(globalThis.URL.createObjectURL).toHaveBeenCalledWith(avatar);
        expect(result.photoUrl).toBe("blob:mika-avatar");
    });
});