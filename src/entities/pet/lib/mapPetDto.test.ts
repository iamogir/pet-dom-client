import { describe, expect, it } from "vitest";
import {fromServerArrayPetsObject, fromServerPetObject} from "entities/pet/lib/mapPetDto.ts";

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