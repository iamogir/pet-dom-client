import {useMutation, type UseMutationOptions} from "@tanstack/react-query";
import type {IUser} from "entities/user/model";
import {editUserById} from "entities/user/api";
import type {IUpdatedUserDto} from "entities/user/model/types.ts";

export const useEditUserById = (options?: UseMutationOptions<IUser, Error, IUpdatedUserDto> ) => {
    return useMutation({
        mutationFn: editUserById,
        ...options,
    })
}