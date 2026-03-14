import {http, HttpResponse} from "msw";

export const handlers = [
    http.get('/api/all_pets', () => {
        return HttpResponse.json(
            {
                data: [ {
                    id: '0',
                    species: 'dog',
                    breed: 'corgi',
                    birthDate: Date.now(),
                    weight: 12,
                    sex: 'male',
                    photoUrl: null,
                },
                {
                    id: '1',
                    species: 'cat',
                    breed: 'none',
                    birthDate: Date.now(),
                    weight: 5,
                    sex: 'female',
                    photoUrl: null,
                },
                {
                    id: '2',
                    species: 'dog',
                    breed: 'corgi',
                    birthDate: Date.now(),
                    weight: 10,
                    sex: 'female',
                    photoUrl: null,
                } ],
                meta: {
                    total: 3
                }
            }
        )
    })
]