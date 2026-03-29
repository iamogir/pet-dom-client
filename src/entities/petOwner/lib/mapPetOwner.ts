import type {IPetOwner, IPetOwnerDto, IPetOwnersDto} from "entities/petOwner/model";
import {parseOwnerRole} from "entities/petOwner/lib/parsers.ts";

export const fromServerObjectPetOwners = (obj: IPetOwnerDto) => {

    const newObj: IPetOwner = {
        id: obj.id,
        userId: obj.userId,
        petId: obj.petId,
        ownerRole: parseOwnerRole(obj.ownerRole),
    }
    if (obj.invitedById) newObj.invitedById = obj.invitedById;

    return newObj;
}

export const fromServerArrayPetOwners = (obj: IPetOwnersDto) => {
    const array = obj.data.map(el => fromServerObjectPetOwners(el));
    return {
        data: array,
        meta: { total: array.length }
    }
}