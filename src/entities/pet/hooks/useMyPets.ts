import {useQuery} from "@tanstack/react-query";
import {getMyPets} from "entities/pet/api/getMyPets.ts";
import {getToken} from "features/auth/utils";

export const useMyPets = () => {
    return useQuery({
        queryKey: ['my_pets'],
        queryFn: getMyPets,
        enabled: !!getToken(),
    })
}