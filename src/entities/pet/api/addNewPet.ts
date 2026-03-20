import type {ICreatePetDto} from "entities/pet/model";
import {fetchClient} from "shared/api";

export const addNewPet = (pet: ICreatePetDto) => {
    return fetchClient('/add_new_pet', {method: 'POST', body: JSON.stringify(pet)});
}