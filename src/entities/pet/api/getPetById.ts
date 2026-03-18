import {fetchClient} from "shared/api";
import type {IPetDto} from "entities/pet/model";
import {fromServerPetObject} from "entities/pet/lib";

export const getPetById = async (id: string) => {
    const response: IPetDto = await fetchClient('/pet_by_id/' + id);
    return fromServerPetObject(response);
}