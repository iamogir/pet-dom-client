import style from './addNewPetPage.module.css'
import {type ChangeEvent, useState} from "react";
import type {ICreatePetDto, IPetForm} from "entities/pet/model";
import {toServerPetObjectCreate} from "entities/pet/lib";
import {useAddNewPet} from "entities/pet/hooks";
import {useQueryClient} from "@tanstack/react-query";
import {petQueryKeys} from "entities/pet/api";
import {Link, useNavigate} from "react-router-dom";

export const AddNewPetPage = () => {

    const [form, setForm] = useState<IPetForm>({
        name: '',
        species: '',
        breed: '',
        birthDate: '',
        weight: -1,
        sex: '',
        photoUrl: '',
        confirm: false,
    });
    const queryClient = useQueryClient();
    const { mutate } = useAddNewPet(
        {
        onSuccess: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all})
    }
    );

    const navigate = useNavigate();


    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        event.preventDefault();

        const eventTarget = event.target;
        setForm(prev => ({...prev, [eventTarget.name]: eventTarget.value}));
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const isConfirmed = confirm('Check pet data: \n' + form.name + '\n' + form.species + '\n' + form.breed + '\n' + form.birthDate + '\n' + form.weight + '\n' + form.sex);
        if (!isConfirmed) return;

        const petObj: ICreatePetDto = toServerPetObjectCreate(form);
        mutate(petObj)

        navigate('/my_pets');
    }

    return (
        <div>
            <h2>Write information about your new pet:</h2>
            <br/>
            <form className={style.box} onSubmit={handleSubmit}>
                <label htmlFor={'name'}>Name: </label>
                <input type={'text'} name={'name'} onChange={handleChange} />

                <label htmlFor={'species'}>Species: </label>
                <input type={'text'} name={'species'} onChange={handleChange} />

                <label htmlFor={'breed'}>Breed: </label>
                <input type={'text'} name={'breed'} onChange={handleChange} />

                <label htmlFor={'birthDate'}>Birth date: </label>
                <input type={'date'} name={'birthDate'} onChange={handleChange} />

                <label htmlFor={'sex'}>Sex: </label>
                <input type={'text'} name={'sex'} onChange={handleChange} />

                <label htmlFor={'weight'}>Weight: </label>
                <input type={'number'} name={'weight'} onChange={handleChange} />

                <label htmlFor={'photoUrl'}>Pet photo: </label>
                <input type={'text'} name={'photoUrl'} onChange={handleChange} />

                <br/>
                <button>
                    <label htmlFor={'submit'}>Add new pet</label>
                    <input type={'submit'} name={'submit'} style={{display: 'none'}}/>
                </button>
            </form>
            <Link to={'/user'}><button>Back to profile</button></Link>

        </div>
    );
};