import type {OwnerRole} from "entities/petOwner";

export interface IPetOwner {
    id: string;
    userId: string;
    petId: string;
    ownerRole: OwnerRole;
    invitedById: string;

}