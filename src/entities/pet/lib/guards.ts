import {petBreed, type PetBreed, petSex, type PetSex, petSpecies, type PetSpecies} from "entities/pet/model";

export const assertPetSpecies: (species: string) => void = (species: string): asserts species is PetSpecies => {
    if (!(petSpecies.includes(species as PetSpecies))) throw new Error('invalid species!!!');
}

export const assertPetBreeds: (breeds: string) => void = (breeds: string): asserts breeds is PetBreed => {
    if (!(petBreed.includes(breeds as PetBreed))) throw new Error('invalid breed!!!');
}

export const assertPetSex: (sex: string) => void = (sex: string): asserts sex is PetSex => {
    if (!(petSex.includes(sex as PetSex))) throw new Error('invalid sex!!!');
}