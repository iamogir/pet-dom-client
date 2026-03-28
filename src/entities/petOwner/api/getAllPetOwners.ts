import {fetchClient} from "shared/api";
import {fromServerArrayPetOwners} from "entities/petOwner/lib";
import type {IPetOwnersDto} from "entities/petOwner/model";

export const getAllPetOwners = async () => {
    const response: IPetOwnersDto = await fetchClient('/get_all_pet_owners');
    return fromServerArrayPetOwners(response);
}