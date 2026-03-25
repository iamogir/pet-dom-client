import {useMutation, type UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import type {IUser} from "entities/user/model";
import {editUserById, userQueryKeys} from "entities/user/api";
import type {IUpdatedUserDto} from "entities/user/model";

export const useEditUserById = (options?: UseMutationOptions<IUser, Error, IUpdatedUserDto> ) => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editUserById,
        ...options,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: userQueryKeys.all }) //depends on the current page!!!
    })
}