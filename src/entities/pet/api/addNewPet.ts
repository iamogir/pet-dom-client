import type {ICreatePetDto, IPetDto} from "entities/pet/model";
import {apiClient} from "shared/api";
import {fromServerPetObject} from "entities/pet/lib";

export const addNewPet = async (pet: ICreatePetDto) => {

    const response: IPetDto = await apiClient('pet', {method: 'POST', body: JSON.stringify(pet)});
    return fromServerPetObject(response);
}