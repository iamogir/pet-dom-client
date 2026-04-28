import {assertPetBreeds, assertPetSex, assertPetSpecies} from "entities/pet/lib";
import type {PetBreed, PetSex, PetSpecies} from "entities/pet/model";

export const parsePetSpecies = (species: string) => {
    assertPetSpecies(species);
    return species as PetSpecies;
}

export const parsePetBreed = <T extends PetSpecies>(species: T, breed: string): PetBreed<T> => {
    assertPetBreeds(species, breed);
    return breed as PetBreed<T>;
}

export const parsePetSex = (sex: string) => {
    assertPetSex(sex);
    return sex as PetSex;
}