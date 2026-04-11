import type {ILoginDto, IRegisterDto, IUserCurrentDto, IUserResponseDto} from "features/auth/types";
import {fromServerCurrentUserDto, fromServerUserResponseDto, getToken} from "features/auth/utils";
import {fetchClient} from "shared/api";

export const login = async (data: ILoginDto):Promise<IUserResponseDto> => {
    return {
        access_token: 'fake-token',
        user: {
            id: '00',
            email: data.email,
            name: 'Lady Di'
        }
    }
}

export const register = async( data: IRegisterDto): Promise<IUserResponseDto> => {

    const response: IUserResponseDto = await fetchClient('auth/register', {method: 'POST', body: JSON.stringify(data)});
    return fromServerUserResponseDto(response)

}

export const getMe = async (): Promise<IUserCurrentDto> => {
    const token = getToken();
    if (!token) throw new Error("Unauthorized");
    const me: IUserCurrentDto = await fetchClient('user/me');

    return fromServerCurrentUserDto(me);
}