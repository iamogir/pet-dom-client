export const petQueryKeys = {
    all: ['all_pets'],

}

// export const petQueryKeys = {
//     all: ["pets"] as const,
//
//     lists: () => [...petQueryKeys.all, "list"] as const,
//
//     list: (filters?: unknown) =>
//         [...petQueryKeys.lists(), filters] as const,
//
//     details: () => [...petQueryKeys.all, "detail"] as const,
//
//     detail: (id: string) =>
//         [...petQueryKeys.details(), id] as const,
// }