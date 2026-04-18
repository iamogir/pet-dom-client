import {useQuery} from "@tanstack/react-query";
import {getMyPets} from "entities/pet/api/getMyPets.ts";
import {getToken} from "features/auth/utils";
import {petQueryKeys} from "entities/pet/api";

export const useMyPets = () => {
    return useQuery({
        queryKey: petQueryKeys.myPets(),
        queryFn: getMyPets,
        enabled: !!getToken(),
    })
}