export const petQueryKeys = {
    all: ['all_pets'],
    details: () => [...petQueryKeys.all, 'detail'],                     //all_pets, detail
    lists: () => [...petQueryKeys.all, 'list'],                         //all_pets, list
    // detail: (petId: string) => [...petQueryKeys.details(), petId],           //all_pets, detail, petId (all users for one pet)
    list: (userId: string) => [...petQueryKeys.lists(), userId],        //all_pets, list, userId (all pets for one user)
    single: (petId: string) => [...petQueryKeys.all, 'single', petId],  //all_pets, single, petId (single pet)

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

// ["pets"]
//    ├── ["pets","list"]
//    │      ├── ["pets","list",{species:"dog"}]
//    │      └── ["pets","list",{species:"cat"}]
//    │
//    └── ["pets","detail"]
//            ├── ["pets","detail","1"]
//            ├── ["pets","detail","2"]
//            └── ["pets","detail","3"]