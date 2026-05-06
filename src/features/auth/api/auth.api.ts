import type {
    ILoginDto,
    IRegisterDto,
    IUserCurrent,
    IUserCurrentDto,
    IUserResponse,
    IUserResponseDto
} from "features/auth/types";
import {fromServerCurrentUserDto, fromServerUserResponseDto, getToken} from "features/auth/utils";
import {apiClient} from "shared/api";

export const login = async (data: ILoginDto):Promise<IUserResponse> => {
    const me: IUserResponseDto = await apiClient('auth/login', {method: 'POST', body: JSON.stringify(data)});
    console.log(me)
    return fromServerUserResponseDto(me);
}

export const register = async( data: IRegisterDto): Promise<IUserResponse> => {

    const response: IUserResponseDto = await apiClient('auth/register', {method: 'POST', body: JSON.stringify(data)});
    return fromServerUserResponseDto(response)

}

export const getMe = async (): Promise<IUserCurrent> => {
    const token = getToken();
    if (!token) throw new Error("Unauthorized");
    const me: IUserCurrentDto = await apiClient('user/me');

    return fromServerCurrentUserDto(me);
}