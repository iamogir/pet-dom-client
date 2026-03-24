import {useAddNewPet, useEditPet} from "entities/pet/hooks";
import style from "./petForm.module.css";
import {
    type ICreatePetDto,
    imagePlaceholder,
    type IPet,
    type IPetForm,
} from "entities/pet/model";
import {type ChangeEvent, useState} from "react";
import {toServerPetObjectCreate, toServerPetObjectUpdate} from "entities/pet/lib";
import {useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
import {petQueryKeys} from "entities/pet/api";

interface Props {
    pet?: IPet;
}

export const PetForm = ({ pet }: Props) => {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const editPet = useEditPet(
        {
            onSuccess: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all})
        }
    );
    const addPet = useAddNewPet(
        {
            onSuccess: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all})
        }
    );
    const [form, setForm] = useState<IPetForm>({
        name: pet?.name ?? '',
        species: pet?.species?? '',
        breed: pet?.breed ?? '',
        birthDate: pet?.birthDate.toString() ?? '',
        weight: pet?.weight ?? -1,
        sex: pet?.sex ?? '',
        photoUrl: pet?.photoUrl ?? imagePlaceholder,
        confirm: false
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        event.preventDefault();

        const eventTarget = event.target;
        setForm(prev => ({...prev, [eventTarget.name]: eventTarget.value}));
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const isConfirmed = confirm('Check pet data: \n' + form.name + '\n' + form.species + '\n' + form.breed + '\n' + form.birthDate + '\n' + form.weight + '\n' + form.sex);
        if (!isConfirmed) return;
        setForm(prev => ({...prev, confirm: true}));

        if (pet) {

            editPet.mutate(toServerPetObjectUpdate(pet.id, form))

        } else {
            const petDto: ICreatePetDto = toServerPetObjectCreate(form);
            addPet.mutate(petDto)

        }

        navigate('/my_pets');
    }

    return (
        <div>
            <form className={style.box} onSubmit={handleSubmit}>
                <label htmlFor={'name'}>Name: </label>
                <input type={'text'} name={'name'} onChange={handleChange} value={form.name} placeholder={'Name'} />

                <label htmlFor={'species'}>Species: </label>
                <input type={'text'} name={'species'} onChange={handleChange} value={form.species} placeholder={'Species'} />

                <label htmlFor={'breed'}>Breed: </label>
                <input type={'text'} name={'breed'} onChange={handleChange} value={form.breed} placeholder={'Breed'} />

                <label htmlFor={'birthDate'}>Birth date: </label>
                <input type={'date'} name={'birthDate'} onChange={handleChange} value={form.birthDate} placeholder={'Birth date'} />

                <label htmlFor={'sex'}>Sex: </label>
                <input type={'text'} name={'sex'} onChange={handleChange} value={form.sex} placeholder={'Sex'} />

                <label htmlFor={'weight'}>Weight: </label>
                <input type={'number'} name={'weight'} onChange={handleChange} value={form.weight} placeholder={'Weight'} />

                <label htmlFor={'photoUrl'}>Pet photo: </label>
                <input type={'text'} name={'photoUrl'} onChange={handleChange} value={form.photoUrl} placeholder={'Photo'} />

                <br/>
                <button>
                    <label htmlFor={'submit'}>Confirm</label>
                    <input type={'submit'} name={'submit'} style={{display: 'none'}}/>
                </button>
            </form>
        </div>
    );
};