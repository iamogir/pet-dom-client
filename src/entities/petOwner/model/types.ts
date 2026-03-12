import type {OwnerRole} from "entities/petOwner";

export interface PetOwner {
    id: string;
    userId: string;
    petId: string;
    ownerRole: OwnerRole;
    invitedById: string;

}