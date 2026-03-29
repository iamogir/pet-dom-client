import {useQuery} from "@tanstack/react-query";
import {getAllPetOwners} from "entities/petOwner/api";
import {petOwnerQueryKeys} from "entities/petOwner/api";

export const useAllPetOwners = () => {
    return useQuery({
        queryKey: petOwnerQueryKeys.all,
        queryFn: getAllPetOwners,
    })
}