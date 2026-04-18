import {useMutation, type UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {deletePetById, petQueryKeys} from "entities/pet/api";
import type {IPet, IPetsDto} from "entities/pet/model";

interface IContext {
    prevPet?: IPetsDto;
}

export const useDeletePetById = (options?: UseMutationOptions<IPet, Error, string, IContext>) => {

    const queryClient = useQueryClient();

    return useMutation({
        onMutate: async (petId): Promise<IContext> => {
            console.log('MUTATE')
            await queryClient.cancelQueries({ queryKey: petQueryKeys.all });
            const prevPet = queryClient.getQueryData<IPetsDto>(petQueryKeys.all);

            queryClient.setQueriesData({ queryKey: petQueryKeys.all }, (old: IPetsDto = {data: [], meta: {total: 0}}):IPetsDto => {
                const safeOld = old ?? { data: [], meta: { total: 0 } };
                const newData = safeOld.data.filter(p => p.id !== petId);


                console.log(newData);

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