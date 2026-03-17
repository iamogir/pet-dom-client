import type {IPetsDto} from "entities/pet/model";
import {fetchClient} from "shared/api";
import {fromServerArrayPetsObject} from "entities/pet/lib";

export const getAllPetsByOwnerId = async (id: string) => {
    const response: IPetsDto = await fetchClient('all_pets_by_owner_id/' + id);
    return fromServerArrayPetsObject(response);
}