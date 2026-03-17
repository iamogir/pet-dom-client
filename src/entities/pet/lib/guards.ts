import {petSpecies, type PetSpecies} from "entities/pet/model";

export const assertPetSpecies = (species: string): asserts species is PetSpecies => {
    if (!(petSpecies.includes(species))) throw new Error('invalid species!!!');
}