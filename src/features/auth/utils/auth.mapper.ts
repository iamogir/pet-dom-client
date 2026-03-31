import type {
    ILoginDto,
    ILoginForm,
    IRegisterDto,
    IRegisterForm,
    IUserResponse,
    IUserResponseDto
} from "features/auth/types";

export const toServerFormRegister = (obj: IRegisterForm): IRegisterDto => {
    return {
        email: obj.email,
        password: obj.password,
        name: obj.name,
    }
}

export const toServerFormLoginDto = (obj: ILoginForm): ILoginDto => {
    return {
        email: obj.email,
        password: obj.password,
    }
}

export const fromServerUserResponseDto = (dto: IUserResponseDto): IUserResponse => {
    return {
        token: dto.token,
        user: {
            id: dto.user.id,
            name: dto.user.name,
            email: dto.user.email
        }
    }
}