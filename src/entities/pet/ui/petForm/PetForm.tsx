import {useEditPet} from "entities/pet/hooks";
import style from "./petForm.module.css";
import {
    type IPet,
    type IPetForm, petBreedMap, petSex,
} from "entities/pet/model";
import {type ChangeEvent, useState} from "react";
import {toServerPetObjectUpdate} from "entities/pet/lib";
import {useNavigate} from "react-router-dom";
import {DropMenu} from "shared/ui/dropMenu";
import {Input} from "shared/ui/input";

interface Props {
    pet: IPet;
}

export const PetForm = ({ pet }: Props) => {

    const navigate = useNavigate();
    const editPet = useEditPet();
    const [form, setForm] = useState<IPetForm>(() => {

        let bDay = '';
        if (pet.birthDate) {
            bDay = pet.birthDate.getFullYear() + '-' +
                String(pet.birthDate.getMonth() + 1).padStart(2, '0') + '-' +
                String(pet.birthDate.getDate()).padStart(2, '0');
        }
        return {
            name: pet.name,
            species: pet.species,
            breed: pet.breed ?? '',
            birthDate:  bDay,
            weight: pet.weight ?? 0,
            sex: pet.sex ?? '',
            photoUrl: pet.photoUrl ?? '',
        }
    });
    const species = Object.keys(petBreedMap);
    const breeds = [];
    for (const [key, value] of Object.entries(petBreedMap)) {
        if (key === form.species) breeds.push(...value);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        event.preventDefault();

        const eventTarget = event.target;
        setForm(prev => ({...prev, [eventTarget.name]: eventTarget.value}));
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const isConfirmed = confirm('Check pet data: \n' + form.name + '\n' + form.species + '\n' + form.breed + '\n' + form.birthDate + '\n' + form.weight + '\n' + form.sex);
        if (!isConfirmed) return;

        if (pet) {
            await editPet.mutateAsync(toServerPetObjectUpdate(pet.id, form));
        }

        navigate('/my_pets');
    }

    const doSetForm = (name: string, value: string) => {
        setForm(prev => ({...prev,  [name]: value }))
    }



    return (
            <form className={style.box} onSubmit={handleSubmit}>
                <Input type={'text'} name={'name'} onChange={handleChange} value={form.name} placeholder={'Name'} label={'Name'}/>
                <DropMenu values={species}
                          onSelect={(value: string) => doSetForm('species', value)}
                          value={form.species}
                          name={'species'}
                          label={'Species'}
                />
                <DropMenu values={breeds as unknown as readonly string[]}
                          onSelect={(value: string) => doSetForm('breed', value)}
                          value={form.breed ?? ''}
                          name={'breed'}
                          label={'Breed'}
                />

                <label htmlFor={'birthDate'}>Birth date: </label>
                <input type={'date'} name={'birthDate'} onChange={handleChange} value={form.birthDate} placeholder={'Birth date'} />

                <DropMenu values={[...petSex]}
                          onSelect={(value: string) => doSetForm('sex', value)}
                          value={form.sex ?? ''}
                          name={'sex'}
                          label={'Sex'}
                />
                <Input type={'number'} name={'weight'} label={'Weight'} onChange={handleChange} value={form.weight?.toString()} placeholder={'0'} />

                <button type={'submit'}>Confirm</button>
            </form>
    );
};