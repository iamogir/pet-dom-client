import {fetchClient} from "shared/api";
import type {IUsers, IUsersDto} from "entities/user/model";
import {fromServerAllUsersDto} from "entities/user/lib";

export const getAllUsers = async (): Promise<IUsers> => {
    const response: IUsersDto = await fetchClient<IUsersDto>('user');
    return fromServerAllUsersDto(response);
}