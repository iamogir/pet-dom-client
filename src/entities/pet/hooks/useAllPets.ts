import {useQuery} from "@tanstack/react-query";
import {getAllPets, petQueryKeys} from "entities/pet/api";

export function useAllPets() {
    return useQuery({
        queryKey: petQueryKeys.all,
        queryFn: getAllPets
    })
}