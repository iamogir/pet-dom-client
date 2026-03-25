import {http, HttpResponse} from "msw";
import {allPetOwners, allPets, allUsers} from "src/mocks/data";
import type {IPetsDto} from "entities/pet/model";
import type {IUsersDto} from "entities/user/model";

//TODO check connections with perOwner

export const petOwnerHandlers = [
    http.get('/api/all_pets_by_owner_id/:id', ({ params }) => {
        const obj: IPetsDto = {
            data: [],
            meta: { total: 0 },
        }
        allPetOwners.map(el => {
            if (el.userId === params.id)  {
                obj.data.push(...allPets.filter(p => p.id === el.petId))
            }
        })

        obj.meta.total = obj.data.length;

        return HttpResponse.json(obj);
    }),
    http.get('/api/all_users_by_pet_id/:id', ({ params }) => {
        const obj: IUsersDto = {
            data: [],
            meta: { total: 0 }
        };
        allPetOwners.map(el => {
            if (el.petId === params.id) {
                obj.data.push(...allUsers.filter(u => u.id === el.userId))
            }
        });

        obj.meta.total = obj.data.length;

        return HttpResponse.json(obj);
    })
]