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

export interface IPetDto {
    id: string;
    species: string;
    breed: string;
    birthDate: string;
    weight: number;
    sex: string;
    photoUrl?: string;
}

export interface IAllPetsDto {
    data: IPetDto[];
    meta: { total: number };
}