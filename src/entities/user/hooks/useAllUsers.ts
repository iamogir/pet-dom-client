import {useQuery} from "@tanstack/react-query";
import {userQueryKeys} from "entities/user/api";

export function useAllUsers() {
    return useQuery({
        queryKey: userQueryKeys.all,
        queryFn: getAllUsers,
    })
}