import {describe, expect, it} from "vitest";
import {toServerPetObjectCreate, toServerPetObjectUpdate} from "entities/pet/lib/mapPetForm.ts";

describe('toServerPetObjectCreate', () => {
    it('should make form fields to DTO', () => {
        const result = toServerPetObjectCreate({
            name: 'Micky',
            species: 'dog'
        })

        expect(result).toEqual({
            name: 'Micky',
            species: 'dog'
        })
    });

    it("add unrequired fields if filled", () => {
        const result = toServerPetObjectCreate({
            name: "Mika",
            species: "dog",
            breed: "corgi",
            photoUrl: "https://example.com/mika.jpg",
        });

        expect(result).toEqual({
            name: "Mika",
            species: "dog",
            breed: "corgi",
            photoUrl: "https://example.com/mika.jpg",
        });
    });
})

describe("toServerPetObjectUpdate", () => {
    it("adds pet id and maps form fields to update DTO", () => {
        const result = toServerPetObjectUpdate("pet-1", {
            name: "Mika",
            species: "dog",
            breed: "corgi",
            birthDate: "2022-05-10",
            weight: 12,
            sex: "female",
            photoUrl: "https://example.com/mika.jpg",
        });

        expect(result).toEqual({
            id: "pet-1",
            name: "Mika",
            species: "dog",
            breed: "corgi",
            birthDate: "2022-05-10",
            weight: 12,
            sex: "female",
            photoUrl: "https://example.com/mika.jpg",
        });
    });
});