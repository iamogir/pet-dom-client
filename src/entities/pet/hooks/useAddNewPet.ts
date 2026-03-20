import type {ICreatePetDto} from "entities/pet/model";
import {useMutation} from "@tanstack/react-query";
import {addNewPet} from "entities/pet/api";

export const useAddNewPet = (pet: ICreatePetDto) => {
    return useMutation({
        mutationFn: () => addNewPet(pet)
        }
    )
}