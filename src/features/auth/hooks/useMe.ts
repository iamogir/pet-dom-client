import {useQuery} from "@tanstack/react-query";
import {getMe} from "features/auth/api";
import {getToken} from "features/auth/utils";

export const useMe = () => {
    return useQuery({
        queryKey: ['me'],
        queryFn: getMe,
        enabled: !!getToken(),
        retry: false,
    })
}