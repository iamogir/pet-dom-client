import {useQuery} from "@tanstack/react-query";
import {petQueryKeys} from "entities/pet/api";
import {getAllPetsByOwnerId} from "entities/petOwner/api";

export const useAllPetsByOwnerId = (id: string) => {
    return useQuery({
        queryKey: petQueryKeys.detail(id),
        queryFn: () => getAllPetsByOwnerId(id),
    })
}