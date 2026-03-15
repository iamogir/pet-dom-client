import type {OwnerRole} from "entities/petOwner/model/index.ts";

export interface IPetOwner {
    id: string;
    userId: string;
    petId: string;
    ownerRole: OwnerRole;
    invitedById: string;

}