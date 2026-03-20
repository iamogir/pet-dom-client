import type {IPetForm} from "entities/pet/model";
import type {ICreatePetDto} from "entities/pet/model/types.ts";


export const toServerPetObject = (obj: IPetForm): ICreatePetDto => {
    const newObj: ICreatePetDto = {
        name: obj.name,
        species: obj.species,
        breed: obj.breed,
        birthDate: obj.birthDate,
        weight: obj.weight,
        sex: obj.sex,
        confirm: true
    }

    if (obj.photoUrl) newObj.photoUrl = obj.photoUrl;
    return newObj;
}