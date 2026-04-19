import {useQuery, type UseQueryOptions} from "@tanstack/react-query";
import {getAllPetsByUserId, petQueryKeys} from "entities/pet/api";
import type {IPets} from "entities/pet/model";

type QueryOptions = Omit<
    UseQueryOptions<IPets>,
    'queryKey' | 'queryFn'
>;

export const useAllPetsByUserId = (id?: string, options?: QueryOptions) => {
    return useQuery<IPets>({
        queryKey: petQueryKeys.list(id!),
        queryFn: () => getAllPetsByUserId(id!),
        enabled: !!id,
        ...options,
    })
}