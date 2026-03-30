import {createContext, useState} from "react";
import type {IAuthContext, IUserCurrent} from "features/auth/types";
import * as React from "react";

interface Props {
    children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({children}: Props) => {

    const [user, setUser] = useState<IUserCurrent | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};