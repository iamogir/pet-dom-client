import {fetchClient} from "shared/api";
import type {IUpdatedUserDto, IUserDto} from "entities/user/model/types.ts";
import {fromServerUserDto} from "entities/user/lib";

export const editUserById = async (data: IUpdatedUserDto) => {
    const response:IUserDto = await fetchClient('/edit_user/' + data.id, { method: 'PATCH', body: JSON.stringify(data)});
    return fromServerUserDto(response)
}