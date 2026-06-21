import {getToken} from "features/auth/utils";
import {fetchClient, ServerError, ValidationError} from "shared/api";
import {ApiError, AuthError} from "shared/api"

export const apiClient = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
    const token = getToken();
    const headers = new Headers(options?.headers);
    const isFormData = options?.body instanceof FormData;

    if (token && !headers.has('Authorization')) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    if (!isFormData && !headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
    }

    const response: Response = await fetchClient(endpoint, {
        ...options,
        // headers: {
        //     ...(token ? { Authorization: `Bearer ${token}` } : {}),
        //     ...options?.headers
        // },
        headers,
    });

    if (response.status === 401) {
        // removeToken();
        throw new AuthError();
    }

    if (response.status === 400) {
        const message = await response.text();
        throw new ValidationError(message);
    }

    if (response.status === 500) {
        throw new ServerError();
    }

    if (!response.ok) {
        const error = await response.text()
        throw new ApiError(error)
    }

    return response.json();
}