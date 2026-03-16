import {fetchClient} from "shared/api";
import type {IAllPets, IAllPetsDto} from "entities/pet/model";
import {fromServerArrayPetsObject} from "entities/pet/lib";

export const getAllPets = async (): Promise<IAllPets> => {

    const response: IAllPetsDto = await fetchClient<IAllPetsDto>('/all_pets');

    return fromServerArrayPetsObject(response);
}