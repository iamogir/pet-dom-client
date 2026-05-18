import {QueryClient} from "@tanstack/react-query";
import {handleGlobalError} from "shared/api";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            onError: (error) => {
                handleGlobalError(error);
            }
        },
        mutations: {
            onError: (error) => {
                handleGlobalError(error);
            }
        }
    }
});