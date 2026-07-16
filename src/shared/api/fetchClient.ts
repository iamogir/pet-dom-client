import {BASE_URL} from "shared/const";

const joinUrl = (baseUrl: string, endpoint: string) => {
    const normalizedBase = baseUrl.replace(/\/+$/, '');
    const normalizedEndpoint = endpoint.replace(/^\/+/, '');

    return `${normalizedBase}/${normalizedEndpoint}`;
};

export const fetchClient = async (endpoint: string, options?: RequestInit)=> {

    const headers = new Headers(options?.headers);

    return await fetch(joinUrl(BASE_URL, endpoint), {
        ...options,
        headers,
    });
}