import {getToken, removeToken} from "features/auth/utils";
import {fetchClient} from "shared/api/fetchClient.ts";
import {ApiError, AuthError} from "shared/api/errors.ts";

export const apiClient = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
    const token = getToken();
    const headers = new Headers(options?.headers);

    if (token && !headers.has('Authorization')) {
        headers.set('Authorization', `Bearer ${token}`);
    }

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
        throw new AuthError();
    }
    if (!response.ok) {
        const error = await response.text()
        throw new ApiError(error)
    }

    return response.json();
}