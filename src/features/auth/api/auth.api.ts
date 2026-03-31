import type {ILoginDto, IRegisterDto, IUserResponseDto} from "features/auth/types";

export const login = async (data: ILoginDto):Promise<IUserResponseDto> => {
    return {
        token: 'fake-token',
        user: {
            id: '00',
            email: data.email,
            name: 'Lady Di'
        }
    }
}

export const register = async( data: IRegisterDto): Promise<IUserResponseDto> => {
    await new Promise((res) => {setTimeout(res, 500)});

    return {
        token: 'fake-token',
        user: {
            id: '00',
            email: data.email,
            name: data.name,
        }
    }
}