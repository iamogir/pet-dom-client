import {createContext} from "react";
import type {IAuthContext} from "features/auth/types";

export const AuthContext = createContext<IAuthContext | null>(null);