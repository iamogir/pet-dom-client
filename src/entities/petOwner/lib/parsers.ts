import {assertOwnerRole} from "entities/petOwner/lib";
import type {OwnerRole} from "entities/petOwner/model";

export const parseOwnerRole = (role: string) => {
    assertOwnerRole(role);
    return role as OwnerRole;
}