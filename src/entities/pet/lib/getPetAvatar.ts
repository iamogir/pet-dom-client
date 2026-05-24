import catAvatar from '../../../shared/assert/illustrations/cat-ill.webp'
import dogAvatar from '../../../shared/assert/illustrations/dog-ill.webp'
import deerAvatar from '../../../shared/assert/illustrations/deer-ill.webp'
import birdAvatar from '../../../shared/assert/illustrations/bird-ill.webp'
import rabbitAvatar from '../../../shared/assert/illustrations/rabbit-ill.webp'
import type {PetSpecies} from "entities/pet/model";

const petAvatarMap: Record<PetSpecies, string> = {
    cat: catAvatar,
    dog: dogAvatar,
    hamster: deerAvatar,
    rabbit: rabbitAvatar,
    hare: rabbitAvatar,
    bird: birdAvatar,
}

export const getPetAvatar = (species: PetSpecies) => {
    return petAvatarMap[species];
}