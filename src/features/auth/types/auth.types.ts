interface IAuthBase {
    email: string,
    password: string
}

export interface IRegisterForm extends IAuthBase {
    name: string;
}
export interface IRegisterDto extends IAuthBase {
    name: string;
}

export type ILoginForm = IAuthBase
export type ILoginDto = IAuthBase

export interface IUserCurrent {
    id: string,
    email: string,
    name: string,
}

export type IUserCurrentDto = IUserCurrent

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