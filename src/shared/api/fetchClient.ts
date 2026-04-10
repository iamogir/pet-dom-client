import {BASE_URL} from "shared/const";
import {getToken} from "features/auth/utils";


export const fetchClient: <T>(endpoint: string, options?: RequestInit) => Promise<T> =
    async (endpoint, options?)=> {

    const token = getToken();

    const headers = new Headers();

        if (options?.body) {
            headers.set('Content-Type', 'application/json');
        }
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }
    if (options?.headers) {
        Object.entries(options.headers).forEach(([key, value]) => {
            headers.set(key, value as string);
        });
    }

        console.log('BODY TYPE:', typeof options?.body);
        console.log('BODY VALUE:', options?.body);

        console.log(headers.keys())

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