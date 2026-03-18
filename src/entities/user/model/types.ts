import type {Country, UserGender} from "entities/user/model";

export interface IUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: Country;
    birthDate: Date;
    gender: UserGender;
    avatarUrl?: string;
}

export interface IUserDto {
    id: string;
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

export interface IUsers {
    data: IUser[];
    meta: { total: number };
}

export interface IUsersDto {
    data: IUserDto[];
    meta: { total: number };
}