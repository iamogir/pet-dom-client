import { describe, expect, it } from "vitest";
import {fromServerPetObject} from "entities/pet/lib/mapPetDto.ts";

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
});