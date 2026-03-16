import {fetchClient} from "shared/api";
import type {IAllUsers, IAllUsersDto} from "entities/user/model";
import {fromServerAllUsersDto} from "entities/user/lib";

export const getAllUsers = async (): Promise<IAllUsers> => {
    const response: IAllUsersDto = await fetchClient<IAllUsersDto>('/all_users');
    return fromServerAllUsersDto(response);
}