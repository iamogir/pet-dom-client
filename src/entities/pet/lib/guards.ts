import {birdBreed, type BirdBreed, petSex, type PetSex, petType, type PetSpecies} from "entities/pet/model";

export const assertPetSpecies: (species: string) => void = (species: string): asserts species is PetSpecies => {
    if (!(petType.includes(species as PetSpecies))) throw new Error('invalid species!!! ' + species);
}

export const assertPetBreeds: (breeds: string) => void = (breeds: string): asserts breeds is BirdBreed => {
    if (!(birdBreed.includes(breeds as BirdBreed))) throw new Error('invalid breed!!!');
}

export const assertPetSex: (sex: string) => void = (sex: string): asserts sex is PetSex => {
    if (!(petSex.includes(sex as PetSex))) throw new Error('invalid sex!!!');
}