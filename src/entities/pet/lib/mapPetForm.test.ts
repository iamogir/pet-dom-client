import {describe, expect, it} from "vitest";
import {toServerPetObjectCreate} from "entities/pet/lib/mapPetForm.ts";

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