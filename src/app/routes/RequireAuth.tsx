import type {ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {useMe} from "features/auth/hooks";

interface Props {
    children: ReactNode
}

export const RequireAuth = ({ children }: Props) => {

    const { data } = useMe();

    if (!data) return <Navigate to={'/sign_in'} replace/>

    return children;
};