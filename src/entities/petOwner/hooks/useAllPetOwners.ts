import {useQuery} from "@tanstack/react-query";
import {getAllPetOwners} from "entities/petOwner/api";
import {petQueryKeys} from "entities/pet/api";

export const useAllPetOwners = () => {
    return useQuery({
        queryKey: petQueryKeys.all,
        queryFn: getAllPetOwners,
    })
}