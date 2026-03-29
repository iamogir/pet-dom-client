import {ownerRole, type OwnerRole} from "entities/petOwner/model";

export const assertOwnerRole: (role: string) => void = (role: string): asserts role is OwnerRole => {
    if (!ownerRole.includes(role as OwnerRole)) throw new Error('invalid owner role!!! ' + role);
}