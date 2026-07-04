export type {
    PetSex, PetSpecies, BirdBreed,
    CatBreed, DogBreed, HamsterBreed,
    RabbitBreed, HareBreed, PetBreed
} from './consts.ts'

export { petSex, petBreedMap } from './consts.ts';

export type { IPet, IPetDto, IPetParsed,
    IPetForm, ICreatePetDto, IUpdatedPetDto,
    IPets, IPetsDto, IPetFormCreate, IPetParsedCreate
} from './types.ts'

export type { IAiAdviceResponse, IAiAdviceResponseDto } from './ai-advice-types.ts'