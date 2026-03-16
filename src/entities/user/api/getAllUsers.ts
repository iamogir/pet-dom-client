import {fetchClient} from "shared/api";
import type {IAllUsersDto} from "entities/user/model";
import {fromServerAllUsersDto} from "entities/user/lib";

export const getAllUsers = async () => {
    const response: IAllUsersDto = await fetchClient<IAllUsersDto>('/all_users');
    return fromServerAllUsersDto(response);
}