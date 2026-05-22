import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addNewPet, petQueryKeys} from "entities/pet/api";
import type {ICreatePetDto, IPet, IPets} from "entities/pet/model";
import {fromServerPetObject} from "entities/pet/lib";

export const useAddNewPet = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addNewPet,
        onMutate: async (newCreatedPet: ICreatePetDto) => {
            await queryClient.cancelQueries({ queryKey: petQueryKeys.all});
            const prevPets = queryClient.getQueryData<IPets>(petQueryKeys.all);

            queryClient.setQueriesData({ queryKey: petQueryKeys.all }, (old: IPets = {data: [], meta: {total: 0}}): IPets => {
                const newPet: IPet = fromServerPetObject({ ...newCreatedPet, id: crypto.randomUUID() });
                console.log(old.data)
                return {
                    ...old,
                    data: [ ...old.data, newPet],
                    meta: {
                        total: old.data.length + 1,
                    }
                }
            })
            return { prevPets };
        },
        onError: (_error, _newPet, context) => {
            queryClient.setQueryData(petQueryKeys.all, context?.prevPets)
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all}),
        },
    )
}