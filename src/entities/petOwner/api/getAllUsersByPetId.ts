import {fetchClient} from "shared/api";
import {fromServerAllUsersDto} from "entities/user/lib";
import type {IUsersDto} from "entities/user/model";

export const getAllUsersByPetId = async (id:string) => {
    const response: IUsersDto = await fetchClient('/all_users_by_pet_id/' + id);
    return fromServerAllUsersDto(response);
}