import {BASE_URL} from "shared/const";
import {getToken} from "features/auth/utils";


export const fetchClient: <T>(endpoint: string, options?: RequestInit) => Promise<T> =
    async (endpoint, options?)=> {

    const token = getToken();
    const headers = new Headers(options?.headers);

    if (options?.body && !headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
    }
    if (token && !headers.has('Authorization')) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(BASE_URL + endpoint, {
        ...options,
        headers,
    })
    if (!response.ok) {
        const error = await response.text()
        throw new Error(error)
    }

    return response.json();
}