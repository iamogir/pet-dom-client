import {useMutation, type UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {deletePetById, petQueryKeys} from "entities/pet/api";
import type {IPet, IPetsDto} from "entities/pet/model";
import {petOwnerQueryKeys} from "entities/petOwner/api";
import type {IPetOwnersDto} from "entities/petOwner/model";

interface IContext {
    prevPet?: IPetsDto;
    prevOwner?: IPetOwnersDto;
}

export const useDeletePetById = (options?: UseMutationOptions<IPet, Error, string, IContext>) => {

    const queryClient = useQueryClient();

    return useMutation({
        onMutate: async (petId): Promise<IContext> => {
            await Promise.all([
                queryClient.cancelQueries({ queryKey: petQueryKeys.all }),

                queryClient.cancelQueries({ queryKey: petOwnerQueryKeys.all })
            ]);
            const prevPet = queryClient.getQueryData<IPetsDto>(petQueryKeys.all);
            const prevOwner = queryClient.getQueryData<IPetOwnersDto>(petOwnerQueryKeys.all);

            queryClient.setQueryData(petQueryKeys.all, (old: IPetsDto = {data: [], meta: {total: 0}}):IPetsDto => {
                const safeOld = old ?? { data: [], meta: { total: 0 } };

                const newData = safeOld.data.filter(p => p.id !== petId);
                return {
                    data: newData,
                    meta: {total: newData.length}
                }
            });
            queryClient.setQueryData(petOwnerQueryKeys.all, (old: IPetOwnersDto = {data: [], meta: {total: 0}}): IPetOwnersDto => {
                const newData = old.data.filter(c => c.petId !== petId);
                return {
                    data: newData,
                    meta: {total: newData.length}
                }
            })


            return { prevPet: prevPet, prevOwner: prevOwner };
        },
        onError: (_error, _petId, context) => {
            queryClient.setQueryData(petQueryKeys.all, context?.prevPet);
            queryClient.setQueryData(petOwnerQueryKeys.all, context?.prevOwner)
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all }),
        mutationFn: deletePetById,
        ...options
    })
}