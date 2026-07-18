import * as React from "react";
import { AuthContext } from "./auth.context";
import {logout} from "features/auth/service";

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: Props) => {

    return (
        <AuthContext.Provider value={ { logout }}>
            {children}
        </AuthContext.Provider>
    );
};