import type {
    ILoginDto,
    ILoginForm,
    IRegisterDto,
    IRegisterForm, IUserCurrent, IUserCurrentDto,
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
        access_token: dto.access_token,
        user: fromServerCurrentUserDto(dto.user)
    }
}

export const fromServerCurrentUserDto = (dto: IUserCurrentDto): IUserCurrent => {
    return {
        id: dto.id,
        email: dto.email,
        name: dto.name,
    }
}