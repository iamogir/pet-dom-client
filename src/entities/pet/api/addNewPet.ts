import type {ICreatePetDto, IPetDto} from "entities/pet/model";
import {fetchClient} from "shared/api";
import {fromServerPetObject} from "entities/pet/lib";

export const addNewPet = async (pet: ICreatePetDto) => {

    const response: IPetDto = await fetchClient('/add_new_pet', {method: 'POST', body: JSON.stringify(pet)});
    return fromServerPetObject(response);
}