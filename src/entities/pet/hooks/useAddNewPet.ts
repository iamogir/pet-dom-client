import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addNewPet, petQueryKeys} from "entities/pet/api";
// import type {ICreatePetDto, IPet} from "entities/pet/model";

export const useAddNewPet = (
    // options?: UseMutationOptions<IPet, Error, ICreatePetDto>
) => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addNewPet,
        // ...options,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all})
        }
    )
}