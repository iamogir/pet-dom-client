import type {
    IPetForm,
    ICreatePetDto,
    IUpdatedPetDto,
    IPetParsed,
    IPetFormCreate,
    IPetParsedCreate
} from "entities/pet/model";
import {parsePetBreed, parsePetSex, parsePetSpecies} from "entities/pet/lib";

const parsePetObject = (obj: IPetForm): IPetParsed => {
    const species = parsePetSpecies(obj.species);
    const newObj : IPetParsed = {
        name: obj.name,
        species: species,
        isParsed: true
    }

    if (obj.photoUrl) newObj.photoUrl = obj.photoUrl;
    if (obj.breed) newObj.breed = parsePetBreed(species, obj.breed);
    if (obj.birthDate) newObj.birthDate = obj.birthDate;
    if (obj.weight) newObj.weight = obj.weight;
    if (obj.sex) newObj.sex = parsePetSex(obj.sex);
    return newObj;
}

const parsePetObjectCreate = (obj: IPetFormCreate): IPetParsedCreate => {
    const species = parsePetSpecies(obj.species);
    const newObj : IPetParsedCreate = {
        name: obj.name,
        species: species,
    }

    if (obj.breed) newObj.breed = parsePetBreed(species, obj.breed);
    if (obj.photoUrl) newObj.photoUrl = obj.photoUrl;
    return newObj;
}

export const toServerPetObjectCreate = (obj: IPetFormCreate): ICreatePetDto => {
    return parsePetObjectCreate(obj);
}

export const toServerPetObjectUpdate = (petId: string, obj: IPetForm): IUpdatedPetDto => {

    const newObj = parsePetObject(obj);
    return {
        id: petId,
        ...newObj,
        photoUrl: obj.photoUrl ?? undefined
    };

}