import type {IUserForm} from "entities/user/model";

export const toServerUserObjectUpdate = (id: string, obj: IUserForm) => {

    return {
        id: id,
        firstName: obj.firstName,
        lastName: obj.lastName,
        phoneNumber: obj.phoneNumber,
        country: obj.country,
        birthDate: obj.birthDate,
        gender: obj.gender,
        avatarUrl: obj.avatarUrl,
        confirm: true
    }


}