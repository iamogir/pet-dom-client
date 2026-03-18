import type {IPetOwnerDto} from "entities/petOwner/model";

export const allPetOwners: IPetOwnerDto[] = [
    {
        id: '000',
        userId: '00',
        petId: '0',
        ownerRole: 'owner',
    },
    {
        id: '001',
        userId: '00',
        petId: '1',
        ownerRole: 'owner',
    },
    {
        id: '002',
        userId: '01',
        petId: '2',
        ownerRole: 'owner',
    },
    {
        id: '003',
        userId: '01',
        petId: '0',
        ownerRole: "family member",
    },
    {
        id: '004',
        userId: '01',
        petId: '1',
        ownerRole: "family member",
    },
    {
        id: '005',
        userId: '02',
        petId: '2',
        ownerRole: 'owner',
    },
    {
        id: '006',
        userId: '02',
        petId: '0',
        ownerRole: 'walker',
    },
]