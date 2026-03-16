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
    })
]