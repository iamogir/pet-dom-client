import type {PetSex, PetSpecies} from "shared/const";

export interface IPet {
    id: string;
    species: PetSpecies;
    breed: string;
    birthDate: Date;
    weight: number;
    sex: PetSex;
    photoUrl?: string;
}