import {
    type BirdBreed,
    petSex,
    type PetSex,
    petType,
    type PetSpecies,
    petSpecies,
    type PetBreed, petBreedMap
} from "entities/pet/model";


export const assertPetSpecies: (species: string) => void = (species: string): asserts species is PetSpecies => {
    const temp = Object.values(petBreedMap);
    if (!(temp.includes(species as PetSpecies))) throw new Error('invalid species!!! ' + species);
}

export const assertPetBreeds: (breeds: string) => void = (breeds: string): asserts breeds is PetBreed => {
    if (!(birdBreed.includes(breeds as PetBreed))) throw new Error('invalid breed!!!');
}

export const assertPetSex: (sex: string) => void = (sex: string): asserts sex is PetSex => {
    if (!(petSex.includes(sex as PetSex))) throw new Error('invalid sex!!!');
}