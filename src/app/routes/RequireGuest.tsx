import type {ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "features/auth/context";

interface Props {
    children: ReactNode;
}

export const RequireGuest = ({ children }: Props) => {

    const { user } = useAuth();

    if (!user) return <Navigate to={'/my_pets'} replace/>

    return children;
};