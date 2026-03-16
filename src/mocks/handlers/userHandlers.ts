import {http, HttpResponse} from "msw";

export const userHandlers = [
    http.get('/api/user_by_id', (id: string) => {
        return HttpResponse.json(

        )
    })
]