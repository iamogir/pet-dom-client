import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addNewPet, petQueryKeys} from "entities/pet/api";
import type {IPet} from "entities/pet/model";
import * as crypto from "node:crypto";
// import type {ICreatePetDto, IPet} from "entities/pet/model";

export const useAddNewPet = (
    // options?: UseMutationOptions<IPet, Error, ICreatePetDto>
) => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addNewPet,
        onMutate: async (newPet) => {
            await queryClient.cancelQueries({ queryKey: petQueryKeys.all});
            const prevPets = queryClient.getQueryData<IPet[]>(petQueryKeys.all);
            queryClient.setQueryData<IPet[]>(petQueryKeys.all,
                (old = []): IPet[] => [
                    ...old,
                    {
                        id: crypto.randomUUID(),
                        ...newPet}
                ]
            )
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all}),
        },

    )
}