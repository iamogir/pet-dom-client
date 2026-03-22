import type {IPetForm, ICreatePetDto, IUpdatedPetDto} from "entities/pet/model";
import {parsePetBreed, parsePetSex, parsePetSpecies} from "entities/pet/lib";

export const toServerPetObjectCreate = (obj: IPetForm): ICreatePetDto => {
    const newObj : ICreatePetDto = {
        name: obj.name,
        species: parsePetSpecies(obj.species),
        breed: parsePetBreed(obj.breed),
        birthDate: obj.birthDate.toString(),
        weight: obj.weight,
        sex: parsePetSex(obj.sex),
        confirm: true,
    }

    if (obj.photoUrl) newObj.photoUrl = obj.photoUrl;
    return newObj;
}

export const toServerPetObjectUpdate = (id: string, obj: IPetForm): IUpdatedPetDto => {

    console.log(obj)
    const newObj = toServerPetObjectCreate(obj);
    return {
        id: id,
        ...newObj,
        photoUrl: obj.photoUrl ?? ''
    };

}