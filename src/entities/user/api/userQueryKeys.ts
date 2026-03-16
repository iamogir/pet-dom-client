export const userQueryKeys = {
    all: ['all_users'],
    details: () => [...userQueryKeys.all, 'details'],
    detail: (id: string) => [...userQueryKeys.details(), id],

}