import {fetchClient} from "shared/api";
import {fromServerUserDto} from "entities/user/lib";
import type {IUserDto} from "entities/user/model";

export const getUserById = async (id: string) => {
    const response: IUserDto = await fetchClient('/user_by_id/' + id);

    return fromServerUserDto(response);
}