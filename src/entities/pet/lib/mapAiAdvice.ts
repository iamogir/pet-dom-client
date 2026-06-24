import type {IAiAdviceResponse, IAiAdviceResponseDto} from "entities/pet/model";

export function fromAiAdviceDto(dto: IAiAdviceResponseDto): IAiAdviceResponse {
    return { advice: dto.advice };
}