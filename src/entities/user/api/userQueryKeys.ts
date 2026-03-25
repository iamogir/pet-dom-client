export const userQueryKeys = {
    all: ['all_users'],
    details: () => [...userQueryKeys.all, 'detail'],                        //all users
    detail: (petId: string) => [...userQueryKeys.details(), petId],         //all pets for one user
    single: (userId: string) => [...userQueryKeys.all, 'single', userId],   //single user

}