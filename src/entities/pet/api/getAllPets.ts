import {apiClient} from "shared/api";
import type {IPets, IPetsDto} from "entities/pet/model";
import {fromServerArrayPetsObject} from "entities/pet/lib";

export const getAllPets = async (): Promise<IPets> => {

    const response: IPetsDto = await apiClient<IPetsDto>('pet');

    return fromServerArrayPetsObject(response);
}