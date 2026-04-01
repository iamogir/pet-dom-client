import {useAuth} from "features/auth/context";
import {useAllPetsByUserId} from "entities/petOwner/hooks";

export const useMyPets = () => {
    const { user } = useAuth();

    return useAllPetsByUserId(user?.id, {
        enabled: !!user,
    })
}