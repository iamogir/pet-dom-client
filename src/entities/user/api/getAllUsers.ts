import {apiClient} from "shared/api";
import type {IUsers, IUsersDto} from "entities/user/model";
import {fromServerAllUsersDto} from "entities/user/lib";

export const getAllUsers = async (): Promise<IUsers> => {
    const response: IUsersDto = await apiClient<IUsersDto>('user');
    return fromServerAllUsersDto(response);
}