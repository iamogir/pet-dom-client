import type {UserCountry, UserGender} from "entities/user/model";

interface IUserBase {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    country: string;
    birthDate: string;
    gender: string;
    avatarUrl?: string;
}

export interface IUser extends Omit<IUserBase, 'birthDate' | 'password'> {
    id: string;
    country: UserCountry;
    birthDate: Date;
    gender: UserGender;
    avatarUrl?: string;
}

export interface IUserDto extends IUserBase {
    id: string;
}
export type IUpdatedUserDto = IUserForm

export interface IUserForm extends Omit<IUserBase, 'email' | 'password'>{

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