import {AuthError} from "shared/api/errors.ts";
import {fullLogout} from "features/auth/adapter";

export const handleGlobalError = (error: unknown) => {
    if (error instanceof AuthError) {
        fullLogout();
        return;
    }

    console.log(error);
}