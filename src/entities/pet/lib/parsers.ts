import {assertPetSpecies} from "entities/pet/lib";
import type {PetSpecies} from "entities/pet/model";

export const parsePetSpecies = (species: string) => {
    assertPetSpecies(species);
    return species as PetSpecies;
}