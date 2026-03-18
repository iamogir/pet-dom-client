import {useQuery} from "@tanstack/react-query";
import {getUserById, userQueryKeys} from "entities/user/api";

export const useUserById = (id: string) => {
    return useQuery({
        queryKey: userQueryKeys.detail(id),
        queryFn: () => getUserById(id)
    })
}