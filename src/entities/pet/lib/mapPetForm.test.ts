import {describe, expect, it} from "vitest";

describe('toServerPetObjectCreate', () => {
    it('should make form fields to DTO', () => {
        const result = {
            name: 'Micky',
            species: 'dog'
        }

        expect(result).toEqual({
            name: 'Micky',
            species: 'dog'
        })
    });
})