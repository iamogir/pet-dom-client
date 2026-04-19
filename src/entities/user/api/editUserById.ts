import {fetchClient} from "shared/api";
import type {IUpdatedUserDto, IUserDto} from "entities/user/model";
import {fromServerUserDto} from "entities/user/lib";

export const editUserById = async (data: IUpdatedUserDto) => {
    const response:IUserDto = await fetchClient('user/me', { method: 'PATCH', body: JSON.stringify(data)});
    return fromServerUserDto(response)
}