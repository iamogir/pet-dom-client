import {fetchClient} from "src/shared";

export const getPets = () => {
    return fetchClient<PetsResponse>('/pets')
}