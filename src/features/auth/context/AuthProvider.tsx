import {useState} from "react";
import type {IUserCurrent} from "features/auth/types";
import * as React from "react";
import { AuthContext } from "./auth.context";
import {getToken} from "features/auth/utils";

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: Props) => {

    const [user, setUser] = useState<IUserCurrent | null>(null);

    const token = getToken();
    if (token) setUser({
        id: '01',
        email: 'email',
        name: 'Name'
    })

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};