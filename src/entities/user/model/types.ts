import type {UserCountry, UserGender} from "entities/user/model";

interface IUserBase {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
    birthDate: string;
    gender: string;
    avatarUrl?: string;
}

export interface IUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: UserCountry;
    birthDate: Date;
    gender: UserGender;
    avatarUrl?: string;
}

export interface IUserDto extends IUserBase {
    id: string;
}

export interface IUserForm extends IUserBase {
    confirm: boolean;
}

export interface IUpdatedUserDto extends IUserBase{
    id: string;
    avatarUrl: string;
    confirm: boolean;

}

export interface IUsers {
    data: IUser[];
    meta: { total: number };
}

export interface IUsersDto {
    data: IUserDto[];
    meta: { total: number };
}