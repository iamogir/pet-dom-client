import {petSpecies, type PetSpecies} from "entities/pet/model";

export const assertPetSpecies: (species: string) => void = (species: string): asserts species is PetSpecies => {
    if (!(petSpecies.includes(species as PetSpecies))) throw new Error('invalid species!!!');
}