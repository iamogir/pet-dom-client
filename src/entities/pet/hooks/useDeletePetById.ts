import {useMutation, type UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {deletePetById, petQueryKeys} from "entities/pet/api";
import type {IPet, IPetDto} from "entities/pet/model";

interface IContext {
    prev?: IPetDto[];
}

export const useDeletePetById = (options?: UseMutationOptions<IPet, Error, string, IContext>) => {

    const queryClient = useQueryClient();

    return useMutation({
        onMutate: async (petId): Promise<IContext> => {
            await queryClient.cancelQueries({ queryKey: petQueryKeys.all });
            const prev = queryClient.getQueryData<IPetDto[]>(petQueryKeys.all);

            queryClient.setQueryData(petQueryKeys.all, (old: IPetDto[] = []) => old.filter(p => p.id !== petId));
            return { prev };
        },
        onError: (_error, _petId, context) => {
            queryClient.setQueryData(petQueryKeys.all, context?.prev);
        },
        mutationFn: deletePetById,
        ...options
    })
}