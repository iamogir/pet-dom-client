import type {PetBreed, PetSex, PetSpecies} from "shared/const";

export interface IPet {
    id: string;
    species: PetSpecies;
    breed: PetBreed;
    birthDate: Date;
    weight: number;
    sex: PetSex;
    photoUrl?: string;
}