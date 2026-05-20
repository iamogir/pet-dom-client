import {useMutation, type UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {addNewPet, petQueryKeys} from "entities/pet/api";
import type {ICreatePetDto, IPet, IPetsDto} from "entities/pet/model";
import * as crypto from "node:crypto";

interface IContext {
    prevPet?: ICreatePetDto;
}

export const useAddNewPet = (options?: UseMutationOptions<IPet, Error, ICreatePetDto, IContext>) => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addNewPet,
        onMutate: async (newPet: ICreatePetDto) => {
            await queryClient.cancelQueries({ queryKey: petQueryKeys.all});
            const prevPets = queryClient.getQueryData<IPetsDto>(petQueryKeys.all);

            queryClient.setQueriesData({ queryKey: petQueryKeys.all }, (old: IPetsDto = {data: [], meta: {total: 0}}): IPetsDto => {
                ...
                    old,
                        {
                            id: crypto.randomUUID(),
                            ...newPet
                        }
                }
            )
            return { prevPets };
        },
        onError: () => {

        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all}),
        },

    )
}