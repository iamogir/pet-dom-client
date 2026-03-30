import {useState} from "react";
import type {IUserCurrent} from "features/auth/types";
import * as React from "react";
import { AuthContext } from "./auth.context";
import {getToken, removeToken} from "features/auth/utils";

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: Props) => {

    const [user, setUser] = useState<IUserCurrent | null>(() => {
        const token = getToken();
        if (token) {
            return {
                id: '01',
                email: 'email',
                name: 'Name'
            }
        }

        return null;
    });


    const logout = () => {
        removeToken();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};