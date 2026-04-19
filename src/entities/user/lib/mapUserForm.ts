import type {IUpdatedUserDto, IUserForm} from "entities/user/model";

export const toServerUserObjectUpdate = (obj: IUserForm): IUpdatedUserDto => {

    return {
        firstName: obj.firstName,
        lastName: obj.lastName,
        phone: obj.phone,
        country: obj.country,
        birthDate: obj.birthDate,
        gender: obj.gender,
        avatarUrl: obj.avatarUrl,
        confirm: true
    }


}