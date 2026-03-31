import * as React from "react";
import { AuthContext } from "./auth.context";
import {removeToken} from "features/auth/utils";
import {useMe} from "features/auth/hooks";
import {useQueryClient} from "@tanstack/react-query";

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: Props) => {

    const { data, isLoading } = useMe();
    const queryClient = useQueryClient();

    const logout = () => {
        removeToken();
        queryClient.removeQueries({ queryKey: ['me'] });
    };

    if (isLoading) return (<p>Loading...</p>);

    return (
        <AuthContext.Provider value={{ user: data ?? null, logout }}>
            {children}
        </AuthContext.Provider>
    );
};