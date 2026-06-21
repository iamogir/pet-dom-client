import type {ICreatePetDto, IPetDto} from "entities/pet/model";
import {apiClient} from "shared/api";
import {fromServerPetObject} from "entities/pet/lib";

export const addNewPet = async (pet: ICreatePetDto, file?: File) => {

    const formData = new FormData();

    formData.append('name', pet.name);
    formData.append('species', pet.species);
    if (pet.breed) formData.append('breed', pet.breed);
    if (file) formData.append('avatar', file);

    const response: IPetDto = await apiClient('pet', {method: 'POST', body: formData});
    return fromServerPetObject(response);
}