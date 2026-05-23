import {logout} from "features/auth/service";
import {queryClient} from "shared/react-query";

export const fullLogout = () => {
    logout();
    queryClient.clear();
    window.location.href = '/sign_in';
}