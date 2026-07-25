import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editPet, petQueryKeys} from "entities/pet/api";
import type {IPet, IPets, IUpdatedPetDto} from "entities/pet/model";
import {fromServerPetObject} from "entities/pet/lib";

export const useEditPet = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editPet,
        onMutate: async (updatedPet: IUpdatedPetDto)=> {
            await queryClient.cancelQueries({ queryKey: petQueryKeys.all });
            const prevPets = queryClient.getQueryData<IPets>(petQueryKeys.all);

            queryClient.setQueryData(petQueryKeys.all, (old: IPets = {data: [], meta: {total: 0}}): IPets => {
                const safeOld = old ?? {data: [], meta: {total: 0}};
                const newData = safeOld.data.map((el) => el.id === updatedPet.id ? fromServerPetObject(updatedPet) : el);

                return {
                    data: newData,
                    meta: {total: newData.length}
                }
            })

            return { prevPets };

        },
        onSuccess: (updatedPet:IPet) => {
            queryClient.setQueryData(petQueryKeys.single(updatedPet.id),
                updatedPet
            )
        },
        onError: (_error, _updatedPet, context) => {
            queryClient.setQueryData(
                petQueryKeys.all,
                context?.prevPets
            );
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all})
    })
}