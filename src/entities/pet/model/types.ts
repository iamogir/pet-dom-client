import type {BirdBreed, PetSex, PetSpecies} from "entities/pet/model";

interface IPetBase {
    name: string;
    species: string;
    breed: string;
    birthDate: string;
    weight: number;
    sex: string;
    photoUrl?: string;
}

export interface IPet {
    id: string;
    name: string;
    species: PetSpecies;
    breed: BirdBreed;
    birthDate: Date;
    weight: number;
    sex: PetSex;
    photoUrl?: string;
}

export interface IPetDto extends IPetBase {
    id: string;
}

export interface IPetParsed extends IPetBase {
    isParsed: boolean;
}

export interface IPetForm extends IPetBase {
    confirm: boolean;
}

export type ICreatePetDto = IPetBase;

export interface IUpdatedPetDto extends IPetBase{
    id: string;
}

export interface IPets {
    data: IPet[];
    meta: { total: number };
}

export interface IPetsDto {
    data: IPetDto[];
    meta: { total: number };
}