import {useQuery} from "@tanstack/react-query";
import {getAiAdvice} from "entities/pet/api";

export const useGetAiAdvice = (id: string) => {
    return useQuery({
        queryKey: ['ai_advice', id],
        queryFn: () => getAiAdvice(id),
    })
}