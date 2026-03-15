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
                    photoUrl: 'https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2F0f2808e8aa4f107a354ec43667e19fb3c919d0b3-3024x3024.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1080&q=75',
                },
                {
                    id: '1',
                    species: 'cat',
                    breed: 'cheshir',
                    birthDate: Date.now(),
                    weight: 5,
                    sex: 'female',
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MHBy8f6oWTLsaNlR2_7esy20w_OVTZIQUg&s',
                },
                {
                    id: '2',
                    species: 'dog',
                    breed: 'corgi',
                    birthDate: Date.now(),
                    weight: 10,
                    sex: 'female',
                    photoUrl: 'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/Welsh-Corgi-Cardigan.jpg',
                } ],
                meta: {
                    total: 3
                }
            }
        )
    })
]