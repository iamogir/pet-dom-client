import {type ICreatePetDto, type IPet, type IPetDto, type IPets, type IPetsDto,} from "entities/pet/model";
import {parsePetBreed, parsePetSex, parsePetSpecies} from "entities/pet/lib";

export function fromServerPetObject(obj: IPetDto): IPet {
    const species = parsePetSpecies(obj.species);
    const newObj: IPet = {
        id: obj.id,
        name: obj.name,
        species: species,
    }
    if (obj.photoUrl) newObj.photoUrl = obj.photoUrl;
    if (obj.breed) newObj.breed = parsePetBreed(species, obj.breed);
    if (obj.birthDate) newObj.birthDate = new Date(obj.birthDate);
    if (obj.weight) newObj.weight = obj.weight;
    if (obj.sex) newObj.sex = parsePetSex(obj.sex);

    return newObj;
}

export function fromServerArrayPetsObject(obj: IPetsDto): IPets {
    return {
        data: obj.data.map(el => fromServerPetObject(el)),
        meta: obj.meta
    };
}

export function fromLocalCreatePetObject(obj: ICreatePetDto): IPet {
    const species = parsePetSpecies(obj.species);
    const newObj: IPet = {
        id: crypto.randomUUID(),
        name: obj.name,
        species: species,
    }
    if (obj.photoUrl && obj.avatar) newObj.photoUrl = URL.createObjectURL(obj.avatar);

    return newObj;
}