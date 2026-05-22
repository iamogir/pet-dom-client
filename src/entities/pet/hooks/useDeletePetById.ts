import {useMutation, type UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {deletePetById, petQueryKeys} from "entities/pet/api";
import type {IPet, IPets} from "entities/pet/model";

interface IContext {
    prevPet?: IPets;
}

export const useDeletePetById = (options?: UseMutationOptions<IPet, Error, string, IContext>) => {

    const queryClient = useQueryClient();

    return useMutation({
        onMutate: async (petId): Promise<IContext> => {
            await queryClient.cancelQueries({ queryKey: petQueryKeys.all });
            const prevPet = queryClient.getQueryData<IPets>(petQueryKeys.all);

            queryClient.setQueriesData({ queryKey: petQueryKeys.all }, (old: IPets = {data: [], meta: {total: 0}}):IPets => {
                const safeOld = old ?? { data: [], meta: { total: 0 } };
                const newData = safeOld.data.filter(p => p.id !== petId);

                return {
                    data: newData,
                    meta: {total: newData.length}
                }
            });

            return { prevPet: prevPet};
        },
        onError: (_error, _petId, context) => {
            queryClient.setQueryData(petQueryKeys.all, context?.prevPet);
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all }),
        mutationFn: deletePetById,
        ...options
    })
}