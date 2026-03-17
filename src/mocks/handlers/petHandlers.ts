import {http, HttpResponse} from "msw";
import {allPets} from "src/mocks/data";

export const petHandlers = [
    http.get('/api/all_pets', () => {
        return HttpResponse.json(
            {
                data: allPets,
                meta: {
                    total: allPets.length
                }
            }
        )
    }),
    http.get('/api/pet_by_id/:id', ({ params }) => {
        return HttpResponse.json(allPets.find(p => p.id === params.id));
    })
]