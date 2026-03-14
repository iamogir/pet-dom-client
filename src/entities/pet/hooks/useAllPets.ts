import {useQuery} from "@tanstack/react-query";
import {getAllPets} from "entities/pet";

export function useAllPets() {
    return useQuery({
        queryKey: ['all_pets'],
        queryFn: getAllPets
    })
}