import type {ILoginDto, IRegisterDto, IUserCurrentDto, IUserResponseDto} from "features/auth/types";
import {getToken} from "features/auth/utils";

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

export const getMe = async (): Promise<IUserCurrentDto> => {
    await new Promise((res) => {setTimeout(res, 500)});
    const token = getToken();
    if (!token) throw new Error("Unauthorized");

    return {
        id: '01',
        email: 'email',
        name: 'Lady Di'
    }
}