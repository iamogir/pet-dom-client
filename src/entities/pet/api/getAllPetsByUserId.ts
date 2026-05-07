import type {IPetsDto} from "entities/pet/model";
import {apiClient} from "shared/api";
import {fromServerArrayPetsObject} from "entities/pet/lib";

export const getAllPetsByUserId = async (id: string) => {
    const response: IPetsDto = await apiClient('user/' + id + '/pets');
    return fromServerArrayPetsObject(response);
}