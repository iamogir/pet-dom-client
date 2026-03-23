import {useMutation, type UseMutationOptions} from "@tanstack/react-query";
import {deletePetById} from "entities/pet/api";
import type {IPet} from "entities/pet/model";

export const useDeletePetById = (options?: UseMutationOptions<IPet, Error, string>) => {
    return useMutation({
        mutationFn: deletePetById,
        ...options
    })
}