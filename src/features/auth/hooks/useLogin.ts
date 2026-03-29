import {useMutation} from "@tanstack/react-query";
import {login} from "features/auth/api";

export const useLogin = () => {
    return useMutation({
        mutationFn: ({ email, password }: {email: string, password: string}) => login(email, password),
    })
}