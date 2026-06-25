import {apiClient} from "shared/api";
import {fromAiAdviceDto} from "entities/pet/lib";
import type {IAiAdviceResponseDto} from "entities/pet/model";

export const getAiAdvice = async (id: string) => {
    const response: IAiAdviceResponseDto = await apiClient('pet/' + id + '/ai-advice');
    return fromAiAdviceDto(response);

}