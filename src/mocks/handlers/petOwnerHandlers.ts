import {http, HttpResponse} from "msw";
import {allPetOwners, allPets, allUsers} from "src/mocks/data";
import type {IPetsDto} from "entities/pet/model";
import type {IUsersDto} from "entities/user/model";

export const petOwnerHandlers = [
    http.get('/api/all_pets_by_owner_id/:id', ({ params }) => {
        const obj: IPetsDto = {
            data: [],
            meta: { total: 0 },
        }
        allPetOwners.forEach(el => {
            if (el.userId === params.id)  {
                // obj.data.push(...allPets.filter(p => p.id === el.petId))
                const pet = allPets.find(p => p.id === el.petId);
                if (pet) obj.data.push(pet);
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
        allPetOwners.forEach(el => {
            if (el.petId === params.id) {
                // obj.data.push(...allUsers.filter(u => u.id === el.userId))
                const user = allUsers.find(u => u.id === el.userId);
                if (user) obj.data.push(user);
            }
        });

        obj.meta.total = obj.data.length;

        return HttpResponse.json(obj);
    })
]