//from server Obj (DTO)

import {country, type IAllUsers, type IAllUsersDto, type IUser, type IUserDto, userGender} from "entities/user/model";

export const fromServerUserDto= (obj: IUserDto): IUser => {
    const newObj: IUser = {
        id: obj.id,
        email: obj.email,
        password: obj.password,
        firstName: obj.firstName,
        lastName: obj.lastName,
        phoneNumber: obj.phoneNumber,
        country: country.find(c => c === obj.country) ? obj.country : null,
        birthDate: new Date(obj.birthDate),
        gender: userGender.find(g => g === obj.gender) ? obj.gender : null,
    }

    if (obj.avatarUrl) newObj.avatarUrl = obj.avatarUrl;

    return newObj;
}

export const fromServerAllUsersDto = (obj: IAllUsersDto): IAllUsers => {
    return {
        data: obj.data.map((u) => fromServerUserDto(u)),
        meta: obj.meta
    }
}