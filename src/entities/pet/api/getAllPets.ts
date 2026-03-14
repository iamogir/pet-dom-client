import {fetchClient} from "src/shared";
import type {IAllPetsDto} from "entities/pet";

export const getAllPets = () => {
    return fetchClient<IAllPetsDto>('/all_pets')
}