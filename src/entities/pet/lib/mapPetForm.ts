import type {IPetForm, ICreatePetDto} from "entities/pet/model";
import {parsePetBreed, parsePetSex, parsePetSpecies} from "entities/pet/lib";


export const toServerPetObject = (obj: IPetForm): ICreatePetDto => {
    const newObj: ICreatePetDto = {
        name: obj.name,
        species: parsePetSpecies(obj.species),
        breed: parsePetBreed(obj.breed),
        birthDate: obj.birthDate,
        weight: obj.weight,
        sex: parsePetSex(obj.sex),
        confirm: true
    }

    if (obj.photoUrl) newObj.photoUrl = obj.photoUrl;
    return newObj;
}