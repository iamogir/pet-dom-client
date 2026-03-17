import {useQuery} from "@tanstack/react-query";
import {petQueryKeys} from "entities/pet/api";
import {getAllPetsByUserId} from "entities/petOwner/api";

export const useAllPetsByUserId = (id: string) => {
    return useQuery({
        queryKey: petQueryKeys.detail(id),
        queryFn: () => getAllPetsByUserId(id),
    })
}