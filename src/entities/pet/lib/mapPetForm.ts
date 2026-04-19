import type {IPetForm, ICreatePetDto, IUpdatedPetDto, IPetParsed} from "entities/pet/model";
import {parsePetBreed, parsePetSex, parsePetSpecies} from "entities/pet/lib";

const parsePetObject = (obj: IPetForm): IPetParsed => {
    const newObj : IPetParsed = {
        name: obj.name,
        species: parsePetSpecies(obj.species),
        breed: parsePetBreed(obj.breed),
        birthDate: obj.birthDate,
        weight: obj.weight,
        sex: parsePetSex(obj.sex),
        isParsed: true
    }

    if (obj.photoUrl) newObj.photoUrl = obj.photoUrl;
    return newObj;
}

export const toServerPetObjectCreate = (obj: IPetForm): ICreatePetDto => {
    return parsePetObject(obj);
}

export const toServerPetObjectUpdate = (petId: string, obj: IPetForm): IUpdatedPetDto => {

    const newObj = parsePetObject(obj);
    return {
        id: petId,
        ...newObj,
        photoUrl: obj.photoUrl ?? undefined
    };

}