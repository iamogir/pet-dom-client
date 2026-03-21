import {fetchClient} from "shared/api";
import type {IPetDto, IUpdatedPetDto} from "entities/pet/model";
import {fromServerPetObject} from "entities/pet/lib";

export const editPet = async (id: string, data: IUpdatedPetDto) => {
    const response: IPetDto = await fetchClient('/api/edit_pet/' + id, {method: 'PATCH', body: JSON.stringify(data)});
    return fromServerPetObject(response);

}