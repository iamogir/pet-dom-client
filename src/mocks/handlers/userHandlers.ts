import {http, HttpResponse} from "msw";
import {allUsers} from "src/mocks/data";
import type {IUserDto} from "entities/user/model";

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
    }),

    http.patch('/api/edit_user/:id', async (req) => {
        const editedUser: IUserDto = (await req.request.json()) as unknown as IUserDto;
        allUsers.map(u => {
            if (u.id === req.params.id) {
                u.firstName = editedUser.firstName;
                u.lastName = editedUser.lastName;
                u.phoneNumber = editedUser.phoneNumber;
                u.country = editedUser.country;
                u.birthDate = editedUser.birthDate;
                u.gender = editedUser.gender;
                u.avatarUrl = editedUser.avatarUrl;
            }
        })
        return HttpResponse.json(editedUser);

    })
]