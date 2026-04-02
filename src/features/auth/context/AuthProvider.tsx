import * as React from "react";
import { AuthContext } from "./auth.context";
import {removeToken} from "features/auth/utils";
import {useQueryClient} from "@tanstack/react-query";
import {userQueryKeys} from "entities/user/api";

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: Props) => {

    const queryClient = useQueryClient();

    const logout = () => {
        removeToken();
        queryClient.removeQueries({ queryKey: userQueryKeys.me() });

    };

    return (
        <AuthContext.Provider value={ { logout }}>
            {children}
        </AuthContext.Provider>
    );
};