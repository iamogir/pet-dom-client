import {useAllPetsByUserId} from "entities/petOwner/hooks";
import {useMe} from "features/auth/hooks";

export const useMyPets = () => {
    const { data } = useMe();

    return useAllPetsByUserId(data?.id, {
        enabled: !!data,
    })
}