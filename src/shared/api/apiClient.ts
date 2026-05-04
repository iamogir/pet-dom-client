import {getToken, removeToken} from "features/auth/utils";
import {fetchClient} from "shared/api/fetchClient.ts";

export const apiClient = async <T>(endpoint: string, options?: RequestInit) => {
    const token = getToken();

    const response: Response = await fetchClient(endpoint, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options?.headers
        },
    });

    if (response.status === 401) {
        removeToken();
        throw new Error('Unauthorized');
    }
    if (!response.ok) {
        const error = await response.text()
        throw new Error(error)
    }
}