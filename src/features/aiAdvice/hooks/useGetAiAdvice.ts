import {useMutation} from "@tanstack/react-query";
import {getAiAdvice} from "features/aiAdvice";


export const useGetAiAdvice = () => {
    return useMutation({
        mutationFn: (id: string) => getAiAdvice(id),
    })
}