import {useMutation} from "@tanstack/react-query";
import {getAiAdvice} from "entities/pet/api";

export const useGetAiAdvice = () => {
    return useMutation({
        mutationFn: (id: string) => getAiAdvice(id),
    })
}