import {useQuery} from "@tanstack/react-query";
import {getPetById, petQueryKeys} from "entities/pet/api";

export const usePetById = (id: string) =>  {
    return useQuery({
        queryKey: petQueryKeys.single(id),
        queryFn: () => getPetById(id),
        enabled: !!id,
    })
}