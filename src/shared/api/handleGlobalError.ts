import {ApiError, AuthError, ServerError} from "shared/api/errors.ts";
import {fullLogout} from "features/auth/adapter";
import {toast} from "react-toastify";

export const handleGlobalError = (error: unknown) => {

    if (error instanceof AuthError) {
        fullLogout();
        return;
    }

    if (error instanceof ServerError) {
        toast.error('Server error, try later');
        return;
    }

    if (error instanceof ApiError) {
        toast.error(error.message || 'Request failed');
        return;
    }

    console.error(error);
}