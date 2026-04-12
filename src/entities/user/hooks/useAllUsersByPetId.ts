import {useQuery} from "@tanstack/react-query";
import {getAllUsersByPetId, userQueryKeys} from "entities/user/api";


export const useAllUsersByPetId = (id:string) => {
    return useQuery({
        queryKey: userQueryKeys.list(id),
        queryFn: () => getAllUsersByPetId(id),
    })
}