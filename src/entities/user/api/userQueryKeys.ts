export const userQueryKeys = {
    all: ['all_users'],
    details: () => [...userQueryKeys.all, 'detail'],            //for users
    detail: (id: string) => [...userQueryKeys.details(), id],   //for one user

}