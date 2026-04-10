import type {ILoginDto, IRegisterDto, IUserCurrentDto, IUserResponseDto} from "features/auth/types";
import {fromServerUserResponseDto, getToken} from "features/auth/utils";
import {fetchClient} from "shared/api";

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
    // await new Promise((res) => {setTimeout(res, 500)});

    const response: IUserResponseDto = await fetchClient('auth/register', {method: 'POST', body: JSON.stringify(data)});
    return fromServerUserResponseDto(response)
    // {
        // token: 'fake-token',
        // user: {
        //     id: '00',
        //     email: data.email,
        //     name: data.name,
        // }
    // }
}

export const getMe = async (): Promise<IUserCurrentDto> => {
    await new Promise((res) => {setTimeout(res, 500)});
    const token = getToken();
    if (!token) throw new Error("Unauthorized");

    return {
        id: '00',
        email: 'email',
        name: 'Lady Di'
    }
}