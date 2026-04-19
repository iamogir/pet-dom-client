import {type IPet, type IPetDto, type IPets, type IPetsDto,} from "entities/pet/model";
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

export function fromServerArrayPetsObject(obj: IPetsDto): IPets {
    return {
        data: obj.data.map(el => fromServerPetObject(el)),
        meta: obj.meta
    };
}