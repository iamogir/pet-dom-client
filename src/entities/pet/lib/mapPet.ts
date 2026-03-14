import {type IPet, type IPetDto, petBreed, petSex, petSpecies,} from "entities/pet";

export function fromServerPetObject(obj: IPetDto): IPet {
    const newObj: IPet = {
        id: obj.id,
        species: petSpecies.find(el => el === obj.species) ? obj.species : null,
        breed: petBreed.find(el => el === obj.breed) ? obj.breed : null,
        birthDate: new Date(obj.birthDate),
        weight: obj.weight,
        sex: petSex.find(el => el === obj.sex) ? obj.sex : null,
    }

    if (obj.photoUrl)
        newObj.photoUrl = obj.photoUrl;
    return newObj;
}