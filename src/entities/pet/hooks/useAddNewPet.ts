import {useMutation, type UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {addNewPet, petQueryKeys} from "entities/pet/api";
import type {ICreatePetDto, IPet, IPetDto, IPetsDto} from "entities/pet/model";

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
                const newPetDto: IPetDto = {
                    id: '123e4567-e89b-12d3-a456-426655440000',
                    //todo check this
                    ...newPet,
                }
                old.data.push(newPetDto);
                return {
                    data: old.data,
                    meta: {
                        total: old.data.length
                    }
                }
            })
            return { prevPets };
        },
        onError: (_error, _newPet, context) => {
            queryClient.setQueryData(petQueryKeys.all, context?.prevPets)

        },
        //add options
        onSuccess: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all}),
        },

    )
}