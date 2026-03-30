import {useState} from "react";
import type {IUserCurrent} from "features/auth/types";
import * as React from "react";
import { AuthContext } from "./auth.context";

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: Props) => {

    const [user, setUser] = useState<IUserCurrent | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};