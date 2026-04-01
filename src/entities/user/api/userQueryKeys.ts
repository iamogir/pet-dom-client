export const userQueryKeys = {
    all: ['all_users'],
    // details: () => [...userQueryKeys.all, 'detail'],                             //all users
    // detail: (petId: string) => [...userQueryKeys.details(), petId],              //all pets for one user
    lists: () => [...userQueryKeys.all, 'list'],
    list: (petId: string) => [...userQueryKeys.lists(), petId],             //all users for one pet
    single: (userId: string) => [...userQueryKeys.all, 'single', userId],   //single user
    me: () => [...userQueryKeys.all, 'me']

}