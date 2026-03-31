import type {IRegisterDto, IRegisterForm, IUserResponse, IUserResponseDto} from "features/auth/types";

export const toServerFormRegister = (obj: IRegisterForm): IRegisterDto => {
    return {
        email: obj.email,
        password: obj.password,
        name: obj.name,
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