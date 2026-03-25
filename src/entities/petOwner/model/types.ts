import type {OwnerRole} from "entities/petOwner/model";

export interface IPetOwner {
    userId: string;
    petId: string;
    ownerRole: OwnerRole;
    invitedById?: string;
}

export interface IPetOwnerDto {
    id: string;
    userId: string;
    petId: string;
    ownerRole: string;
    invitedById?: string;
}