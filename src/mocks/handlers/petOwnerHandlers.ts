import {http, HttpResponse} from "msw";
import {allPetOwners, allPets} from "src/mocks/data";
import type {IPetsDto} from "entities/pet/model";

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

        console.log(obj)

        obj.meta.total = obj.data.length;

        return HttpResponse.json(obj);
    })
]