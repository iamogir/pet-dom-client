import type {OwnerRole} from "entities/petOwner/model";

export interface IPetOwner {
    id: string;
    userId: string;
    petId: string;
    ownerRole: OwnerRole;
    invitedById?: string;
}

export interface IPetOwnerDto extends Omit<IPetOwner, 'ownerRole'>{
    ownerRole: string;
}

export interface IPetOwners {
    data: IPetOwner[];
    meta: { total: number };
}

export interface IPetOwnersDto {
    data: IPetOwnerDto[];
    meta: { total: number };
}