import {fetchClient} from "src/shared";
import {fromServerArrayPetsObject, type IAllPets, type IAllPetsDto} from "entities/pet";

export const getAllPets = async (): Promise<IAllPets> => {

    const response: IAllPetsDto = await fetchClient<IAllPetsDto>('/all_pets');

    return fromServerArrayPetsObject(response);
}