import {fetchClient} from "shared/api";
import type {IPets, IPetsDto} from "entities/pet/model";
import {fromServerArrayPetsObject} from "entities/pet/lib";

export const getAllPets = async (): Promise<IPets> => {

    const response: IPetsDto = await fetchClient<IPetsDto>('/all_pets');

    return fromServerArrayPetsObject(response);
}