import {fetchClient} from "shared/api";

export const getAllPetOwners = () => {
    const response = fetchClient('/get_all_pet_owners');
    return fromServerArrayPetOwners(response);
}