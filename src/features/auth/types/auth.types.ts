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

export interface IAuthContext {
    user: IUserCurrent | null,
    setUser: (user: IUserCurrent | null) => void,
    logout: () => void,
}

export interface IUserResponse {
    token: string;
    user: IUserCurrent
}

export interface IUserResponseDto {
    token: string;
    user: IUserCurrent
}