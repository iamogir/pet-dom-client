import type {PetBreed, PetSex, PetSpecies} from "entities/pet";


export interface IPet {
    id: string;
    species: PetSpecies;
    breed: PetBreed;
    birthDate: Date;
    weight: number;
    sex: PetSex;
    photoUrl?: string;
}