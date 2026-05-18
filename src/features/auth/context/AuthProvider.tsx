import * as React from "react";
import { AuthContext } from "./auth.context";
import {logout} from "features/auth/service";
// import {userQueryKeys} from "entities/user/api";

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: Props) => {

    // const queryClient = useQueryClient();

    // const logout = () => {
    //     removeToken();
    //     // queryClient.removeQueries({ queryKey: userQueryKeys.me() });
    //     // queryClient.removeQueries({ queryKey: ['my_pets']});
    //     queryClient.clear();
    //
    // };

    return (
        <AuthContext.Provider value={ { logout }}>
            {children}
        </AuthContext.Provider>
    );
};