export const userQueryKeys = {
    all: ['all_users'],
    details: () => [...userQueryKeys.all, 'detail'],
    detail: (id: string) => [...userQueryKeys.details(), id],

}