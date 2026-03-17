import {
    type IAllPets,
    type IAllPetsDto,
    type IPet,
    type IPetDto,
} from "entities/pet/model";
import {parsePetBreed, parsePetSex, parsePetSpecies} from "entities/pet/lib";

export function fromServerPetObject(obj: IPetDto): IPet {

    const newObj: IPet = {
        id: obj.id,
        name: obj.name,
        species: parsePetSpecies(obj.species),
        breed: parsePetBreed(obj.breed),
        birthDate: new Date(obj.birthDate),
        weight: obj.weight,
        sex: parsePetSex(obj.sex),
    }

    if (obj.photoUrl) newObj.photoUrl = obj.photoUrl;
    return newObj;
}

export function fromServerArrayPetsObject(obj: IAllPetsDto): IAllPets {
    return {
        data: obj.data.map(el => fromServerPetObject(el)),
        meta: obj.meta
    }
}