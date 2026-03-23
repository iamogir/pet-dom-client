import {http, HttpResponse} from "msw";
import {allPets} from "src/mocks/data";
import type {ICreatePetDto, IPetDto} from "entities/pet/model";

export const petHandlers = [
    http.get('/api/all_pets', () => {
        return HttpResponse.json(
            {
                data: allPets,
                meta: {
                    total: allPets.length
                }
            }
        )
    }),
    http.get('/api/pet_by_id/:id', ({ params }) => {
        return HttpResponse.json(allPets.find(p => p.id === params.id));
    }),
    http.post('/api/add_new_pet', async (req) => {
        const obj:ICreatePetDto = (await req.request.json()) as unknown as ICreatePetDto;
        const newPet: IPetDto = {
            id: '00' + obj.weight,
            name: obj.name,
            species: obj.species,
            breed: obj.breed,
            birthDate: obj.birthDate,
            weight: obj.weight,
            sex: obj.sex,
        }
        if (obj.photoUrl) newPet.photoUrl = obj.photoUrl;

        allPets.push(newPet)
        return HttpResponse.json(newPet)
    }),
    http.patch('/api/edit_pet/:id', async (req) => {

        const editedPet: IPetDto = (await req.request.json()) as unknown as IPetDto;
        allPets.map(p => {
            if (p.id === req.params.id) {
                p.name = editedPet.name;
                p.species = editedPet.species;
                p.breed = editedPet.breed;
                p.birthDate = editedPet.birthDate;
                p.weight = editedPet.weight;
                p.sex = editedPet.sex;
                p.photoUrl = editedPet.photoUrl;
            }
        })
        return HttpResponse.json(editedPet);

    }),
    http.delete('/api/delete_pet_by_id/:id', ({ params }) => {
        let pet = {};
        const petIndex = allPets.findIndex(p => {
            if( p.id === params.id) {
                pet = p;
                return true;
            }
        });
        allPets.splice(petIndex, 1);
        return HttpResponse.json(pet as IPetDto);

    })

]