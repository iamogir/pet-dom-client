import {useEditPet} from "entities/pet/hooks";
import style from "pages/addNewPetPage/ui/addNewPetPage.module.css";
import {useEffect, useState} from "react";
import {
    imagePlaceholder,
    type IPet,
    type IPetForm,
} from "entities/pet/model";

interface Props {
    pet: IPet;
}

export const PetForm = ({ pet }: Props) => {

    const { mutate } = useEditPet();
    const defaultValues: IPetForm = {
        name: '',
        species: '',
        breed: '',
        birthDate: '',
        weight: -1,
        sex: '',
        photoUrl: imagePlaceholder,
        confirm: false
    };
    const values = !pet ? defaultValues : {
        ...pet,
        confirm: true
    }



    return (
        <div>
            <form className={style.box} onSubmit={handleSubmit}>
                <label htmlFor={'name'}>Name: </label>
                <input type={'text'} name={'name'} onChange={handleChange} value={values.name} />

                            <label htmlFor={'species'}>Species: </label>
                            <input type={'text'} name={'species'} onChange={handleChange} value={values.species} />

                            <label htmlFor={'breed'}>Breed: </label>
                            <input type={'text'} name={'breed'} onChange={handleChange} value={values.breed} />

                            <label htmlFor={'birthDate'}>Birth date: </label>
                            <input type={'date'} name={'birthDate'} onChange={handleChange} value={values.birthDate.toString()} />

                            <label htmlFor={'sex'}>Sex: </label>
                            <input type={'text'} name={'sex'} onChange={handleChange} value={values.sex} />

                            <label htmlFor={'weight'}>Weight: </label>
                            <input type={'number'} name={'weight'} onChange={handleChange} value={values.weight} />

                            <label htmlFor={'photoUrl'}>Pet photo: </label>
                            <input type={'text'} name={'photoUrl'} onChange={handleChange} value={values.photoUrl} />

                            <br/>
                            <button>
                                <label htmlFor={'submit'}>Add new pet</label>
                                <input type={'submit'} name={'submit'} style={{display: 'none'}}/>
                            </button>
                        </form>

        </div>
    );
};