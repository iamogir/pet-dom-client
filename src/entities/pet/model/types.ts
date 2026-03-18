import type {PetBreed, PetSex, PetSpecies} from "entities/pet/model";


export interface IPet {
    id: string;
    name: string;
    species: PetSpecies;
    breed: PetBreed;
    birthDate: Date;
    weight: number;
    sex: PetSex;
    photoUrl?: string;
}

export interface IPetDto {
    id: string;
    name: string;
    species: string;
    breed: string;
    birthDate: string;
    weight: number;
    sex: string;
    photoUrl?: string;
}

export interface IPets {
    data: IPet[];
    meta: { total: number };
}

export interface IPetsDto {
    data: IPetDto[];
    meta: { total: number };
}