import {fetchClient} from "shared/api";
import {fromServerArrayPetsObject} from "entities/pet/lib";
import type {IPetsDto} from "entities/pet/model";

export const getMyPets = async () => {
    const response: IPetsDto = await fetchClient('user/me/pets');
    return fromServerArrayPetsObject(response);
}