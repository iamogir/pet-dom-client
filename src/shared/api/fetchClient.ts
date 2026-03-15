import {BASE_URL} from "shared/const";


export const fetchClient: <T>(endpoint: string, options?: RequestInit) => Promise<T> =
    async (endpoint, options?)=> {
    const response = await fetch(BASE_URL + endpoint, {
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        ...options,
    })
    if (!response.ok) {
        const error = await response.text()
        throw new Error(error)
    }

    return response.json();
}