import {useQuery} from "@tanstack/react-query";
import {userQueryKeys} from "entities/user/api";
import {getAllUsersByPetId} from "entities/petOwner/api";

export const useAllUsersByPetId = (id:string) => {
    return useQuery({
        queryKey: userQueryKeys.detail(id),
        queryFn: () => getAllUsersByPetId(id),
    })
}