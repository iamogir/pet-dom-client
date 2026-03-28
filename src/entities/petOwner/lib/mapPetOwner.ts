import type {IPetOwner, IPetOwnerDto} from "entities/petOwner/model";

export const fromServerObjectPetOwners = (obj: IPetOwnerDto) => {

    const newObj: IPetOwner = {
        id: obj.id,
        userId: obj.userId,
        petId: obj.petId,
        ownerRole: obj.ownerRole
    }
    if (obj.invitedById) newObj.invitedById = obj.invitedById;

    return newObj;
}