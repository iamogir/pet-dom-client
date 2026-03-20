import {useMutation, type UseMutationOptions} from "@tanstack/react-query";
import {addNewPet} from "entities/pet/api";
import type {ICreatePetDto, IPet} from "entities/pet/model";

export const useAddNewPet = (options?: UseMutationOptions<IPet, Error, ICreatePetDto>) => {

    console.log('USE')

    return useMutation({
        mutationFn: addNewPet,
        ...options,
        }
    )
}