import {removeToken} from "features/auth/utils";

export const logout = () => {
        removeToken();
}