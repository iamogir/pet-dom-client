import {BASE_URL} from "shared/const";
import {getToken} from "features/auth/utils";


export const fetchClient: <T>(endpoint: string, options?: RequestInit) => Promise<T> =
    async (endpoint, options?)=> {

    const token = getToken();
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...(options?.headers as Record<string, string>),
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(BASE_URL + endpoint, {
        ...headers,
        ...options,
    })
    if (!response.ok) {
        const error = await response.text()
        throw new Error(error)
    }

    return response.json();
}