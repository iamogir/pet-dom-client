import style from './addNewPetPage.module.css'
import {type FormEvent, useState} from "react";
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


    const createPetFormObj = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const eventTarget = event.target as HTMLFormElement;
        setForm(prev => ({...prev, [eventTarget.name]: eventTarget.value}));
    }

    return (
        <div>
            <h2>Write information about your new pet:</h2>
            <br/>
            <form className={style.box} onSubmit={createPetFormObj}>
                <label htmlFor={'petName'}>Name: </label>
                <input type={'text'} name={'petName'} />

                <label htmlFor={'petSpecies'}>Species: </label>
                <input type={'text'} name={'petSpecies'} />

                <label htmlFor={'petBreed'}>Breed: </label>
                <input type={'text'} name={'petBreed'} />

                <label htmlFor={'petBirth'}>Birth date: </label>
                <input type={'date'} name={'petBirth'} />

                <label htmlFor={'petSex'}>Sex: </label>
                <input type={'text'} name={'petSex'} />

                <label htmlFor={'petWeight'}>Weight: </label>
                <input type={'number'} name={'petWeight'} />

                <label htmlFor={'petImg'}>Pet photo: </label>
                <input type={'text'} name={'petImg'} />

                <br/>
                <button>
                    <label htmlFor={'submit'}>Add new pet</label>
                    <input type={'submit'} name={'submit'} style={{display: 'none'}}/>
                </button>
            </form>

        </div>
    );
};