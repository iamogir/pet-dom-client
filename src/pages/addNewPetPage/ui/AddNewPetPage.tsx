import style from './addNewPetPage.module.css'
import {type ChangeEvent, useState} from "react";
import type {IPetForm} from "entities/pet/model";

export const AddNewPetPage = () => {

    const [form, setForm] = useState<IPetForm>({
        name: '',
        species: '',
        breed: '',
        birthDate: '',
        weight: -1,
        sex: '',
        photoUrl: ''
    });


    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        event.preventDefault();

        const eventTarget = event.target;
        setForm(prev => ({...prev, [eventTarget.name]: eventTarget.value}));
    }

    const handleSubmit = () => {

        //mapPetForm

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

        </div>
    );
};