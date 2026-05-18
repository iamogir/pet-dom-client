import {AuthError} from "shared/api/errors.ts";
import {removeToken} from "features/auth/utils";

export const handleGlobalError = (error: unknown) => {


    if (error instanceof AuthError) {
        removeToken();
        //queryClient.clear();
        window.location.href = '/sign_in';
        return;
    }

    console.log(error);
}