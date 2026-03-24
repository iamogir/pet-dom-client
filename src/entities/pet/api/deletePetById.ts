import {fetchClient} from "shared/api";
import {fromServerPetObject} from "entities/pet/lib";
import type {IPetDto} from "entities/pet/model";

export const deletePetById = async (id: string) => {
    const response: IPetDto = await fetchClient('/delete_pet_by_id/' + id, {method: 'DELETE'});
    return fromServerPetObject(response);
}