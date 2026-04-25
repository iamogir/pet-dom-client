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
    if (!(species in petSpecies)) throw new Error('invalid species!!! ' + species);
}

export const assertPetBreeds = <T extends PetSpecies> (species: T, breeds: string): asserts breeds is PetBreed<T> => {
    const validBreeds = petBreedMap[species] as readonly string[];
    if (!validBreeds.includes(breeds as (typeof validBreeds)[number])) throw new Error('invalid breed!!!');
}

export const assertPetSex: (sex: string) => void = (sex: string): asserts sex is PetSex => {
    if (!(petSex.includes(sex as PetSex))) throw new Error('invalid sex!!!');
}