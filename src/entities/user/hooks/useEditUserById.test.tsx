// @vitest-environment jsdom

// import type { ReactNode } from "react";
// import {
//     QueryClient,
//     QueryClientProvider,
// } from "@tanstack/react-query";
// import { act, renderHook } from "@testing-library/react";
import {
    // afterEach,
    describe,
    // expect,
    it,
    // vi
} from "vitest";
// import { editUserById, userQueryKeys } from "entities/user/api";
// import type {
//     IUpdatedUserDto,
//     IUser,
// } from "entities/user/model";
// import { useEditUserById } from "./useEditUserById";

//
// vi.mock("entities/user/api", async () => {
//     const actual = await vi.importActual<
//         typeof import("entities/user/api")
//     >("entities/user/api");
//
//     return {
//         ...actual,
//         editUserById: vi.fn(),
//     };
// });
//
// afterEach(() => {
//     vi.clearAllMocks();
//     vi.restoreAllMocks();
// });
//
describe("useEditUserById", () => {
    it.todo("invalidates current user query after successful editing");
//     it("invalidates current user query after successful editing", async () => {
//         const queryClient = new QueryClient({
//             defaultOptions: {
//                 queries: {
//                     retry: false,
//                 },
//                 mutations: {
//                     retry: false,
//                 },
//             },
//         });
//
//         const invalidateQueries = vi.spyOn(
//             queryClient,
//             "invalidateQueries"
//         );
//
//         const formData: IUpdatedUserDto = {
//             firstName: "Mika",
//             lastName: "Smith",
//             phone: "+972500000000",
//             country: "Israel",
//             birthDate: "1995-06-15",
//             gender: "female",
//             avatarUrl: "",
//             confirm: true,
//         };
//
//         const updatedUser: IUser = {
//             id: "user-1",
//             email: "mika@example.com",
//             firstName: "Mika",
//             lastName: "Smith",
//             phone: "+972500000000",
//             country: "Israel",
//             birthDate: new Date("1995-06-15"),
//             gender: "female",
//             avatarUrl: "",
//         };
//
//         vi.mocked(editUserById).mockResolvedValue(updatedUser);
//
//         const wrapper = ({ children }: { children: ReactNode }) => (
//             <QueryClientProvider client={queryClient}>
//                 {children}
//             </QueryClientProvider>
//         );
//
//         const { result } = renderHook(
//             () => useEditUserById(),
//             { wrapper }
//         );
//
//         await act(async () => {
//             await result.current.mutateAsync(formData);
//         });
//
//         expect(editUserById).toHaveBeenCalledWith(formData);
//         expect(invalidateQueries).toHaveBeenCalledWith({
//             queryKey: userQueryKeys.me(),
//         });
//
//         queryClient.clear();
//     });
});