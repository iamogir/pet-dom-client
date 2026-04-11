import {useMe} from "features/auth/hooks";
import {useQuery} from "@tanstack/react-query";
import {getMyPets} from "entities/pet/api/getMyPets.ts";
import {petQueryKeys} from "entities/pet/api";

export const useMyPets = () => {
    const { data } = useMe();

    return useQuery({
        queryKey: petQueryKeys.list(data!.id),
        queryFn: getMyPets,
        enabled: !!data,
    })
}