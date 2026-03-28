import {useMutation, type UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {deletePetById, petQueryKeys} from "entities/pet/api";
import type {IPet, IPetsDto} from "entities/pet/model";

interface IContext {
    prev?: IPetsDto;
}

export const useDeletePetById = (options?: UseMutationOptions<IPet, Error, string, IContext>) => {

    const queryClient = useQueryClient();

    return useMutation({
        onMutate: async (petId): Promise<IContext> => {
            await queryClient.cancelQueries({ queryKey: petQueryKeys.all });
            const prev = queryClient.getQueryData<IPetsDto>(petQueryKeys.all);

            queryClient.setQueryData(petQueryKeys.all, (old: IPetsDto):IPetsDto => {
                    const newData = old.data.filter(p => p.id !== petId);
                    return {
                        data: newData,
                        meta: {total: newData.length}
                    }
                }
            );


            return { prev };
        },
        onError: (_error, _petId, context) => {
            queryClient.setQueryData(petQueryKeys.all, context?.prev);
        },
        mutationFn: deletePetById,
        ...options
    })
}