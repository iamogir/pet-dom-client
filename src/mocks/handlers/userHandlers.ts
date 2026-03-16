import {http, HttpResponse} from "msw";
import {allUsers} from "src/mocks/data";

export const userHandlers = [
    http.get('/api/user_by_id/:id', ({ params }) => {
        return HttpResponse.json(allUsers.find((u) => u.id === params.id))
    }),

    http.get('/api/all_users', () => {
        return HttpResponse.json(
            {
                data: allUsers,
                meta: {
                    total: allUsers.length
                }
            }
        );
    })
]