import type {ReactNode} from "react";
import {useAuth} from "features/auth/context";
import {Navigate} from "react-router-dom";

interface Props {
    children: ReactNode
}

export const RequireAuth = ({ children }: Props) => {

    const { user } = useAuth();

    if (!user) return <Navigate to={'/login'} replace/>

    return children;
};