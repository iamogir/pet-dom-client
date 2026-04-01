import {useQuery, type UseQueryOptions} from "@tanstack/react-query";
import {petQueryKeys} from "entities/pet/api";
import {getAllPetsByUserId} from "entities/petOwner/api";

type QueryOptions = Omit<
    UseQueryOptions,
    'queryKey' | 'queryFn'
>;

export const useAllPetsByUserId = (id?: string, options?: QueryOptions) => {
    return useQuery({
        queryKey: petQueryKeys.list(id!),
        queryFn: () => getAllPetsByUserId(id!),
        enabled: !!id,
        ...options,
    })
}