//from server Obj (DTO)

import {type IUsers, type IUsersDto, type IUser, type IUserDto} from "entities/user/model";
import {parseUserCountry, parseUserGender} from "entities/user/lib";

export const fromServerUserDto= (obj: IUserDto): IUser => {
    const newObj: IUser = {
        id: obj.id,
        email: obj.email,
        password: obj.password,
        firstName: obj.firstName,
        lastName: obj.lastName,
        phoneNumber: obj.phoneNumber,
        country: parseUserCountry(obj.country),
        birthDate: new Date(obj.birthDate),
        gender: parseUserGender(obj.gender),
    }

    if (obj.avatarUrl) newObj.avatarUrl = obj.avatarUrl;

    return newObj;
}

export const fromServerAllUsersDto = (obj: IUsersDto): IUsers => {
    return {
        data: obj.data.map((u) => fromServerUserDto(u)),
        meta: obj.meta
    }
}