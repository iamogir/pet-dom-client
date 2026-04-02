import {useQuery} from "@tanstack/react-query";
import {getMe} from "features/auth/api";
import {getToken} from "features/auth/utils";
import {userQueryKeys} from "entities/user/api";

export const useMe = () => {
    return useQuery({
        queryKey: userQueryKeys.me(),
        queryFn: getMe,
        enabled: !!getToken(),
        retry: false,
    })
}