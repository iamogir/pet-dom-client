export type { PetSex, PetSpecies, PetBreed } from './model/consts.ts'
export { petSex, petSpecies, petBreed } from './model/consts.ts';

export type { IPet, IPetDto, IAllPets, IAllPetsDto } from './model/types.ts'
export { getAllPets } from './api/getAllPets.ts'
export { fromServerPetObject, fromServerArrayPetsObject } from './lib/mapPet.ts'