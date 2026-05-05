import type {UserCountry, UserGender} from "entities/user/model";

interface IAuthBase {
    email: string,
    password: string
}

export interface IRegisterForm extends IAuthBase {
    firstName: string;
    lastName: string;
    phone: string;
    country: string;
    birthDate: string;
    gender: string;
    avatarUrl?: string;
}
export type IRegisterDto = IRegisterForm
export type ILoginForm = IAuthBase
export type ILoginDto = IAuthBase

export interface IUserCurrent {
    id: string,
    email: string,

    firstName: string;
    lastName: string;
    phone: string;
    country: UserCountry;
    birthDate: Date;
    gender: UserGender;
    avatarUrl?: string;
}

export interface IUserCurrentDto extends Omit<IUserCurrent, 'birthDate' | 'gender' | 'country'> {
    country: string,
    birthDate: string,
    gender: string,
}

export interface IAuthContext {
    logout: () => void,
}

export interface IUserResponse {
    access_token: string;
    user: IUserCurrent
}
export interface IUserResponseDto {
    access_token: string;
    user: IUserCurrentDto
}