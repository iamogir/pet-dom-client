import {useMutation, type UseMutationOptions} from "@tanstack/react-query";
import {editPet} from "entities/pet/api";
import type {IPet, IUpdatedPetDto} from "entities/pet/model";

export const useEditPet = (options?: UseMutationOptions<IPet, Error, IUpdatedPetDto>) => {
    return useMutation({
        mutationFn: editPet,
        ...options,
    })
}