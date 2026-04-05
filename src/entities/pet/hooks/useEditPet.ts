import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editPet, petQueryKeys} from "entities/pet/api";
import type {IPet} from "entities/pet/model";

export const useEditPet = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editPet,
        onSuccess: (updatedPet:IPet) => {
            queryClient.setQueryData(petQueryKeys.single(updatedPet.id),
                // (old: IPet[] = []) => old.map(p => p.id === updatedPet.id ? updatedPet : p)
                updatedPet
            )
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all})
    })
}