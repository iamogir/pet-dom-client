import style from "./userForm.module.css"
import {useState} from "react";

export const UserForm = () => {

    const [form, setForm] = useState({})

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <form className={style.box} onSubmit={handleSubmit}>
                <label htmlFor={'firstName'}>Name: </label>
                <input type={'text'} name={'firstName'} onChange={handleChange} value={form.name} placeholder={'First Name'} />

                <label htmlFor={'lastName'}>Species: </label>
                <input type={'text'} name={'lastName'} onChange={handleChange} value={form.lastName} placeholder={'Last Name'} />

                <label htmlFor={'email'}>Breed: </label>
                <input type={'email'} name={'email'} onChange={handleChange} value={form.email} placeholder={'Email'} />

                <label htmlFor={'phoneNumber'}>Birth date: </label>
                <input type={'text'} name={'phoneNumber'} onChange={handleChange} value={form.phoneNumber} placeholder={'Phone Number'} />

                <label htmlFor={'country'}>Sex: </label>
                <input type={'text'} name={'country'} onChange={handleChange} value={form.country} placeholder={'Country'} />

                <label htmlFor={'gender'}>Weight: </label>
                <input type={'number'} name={'gender'} onChange={handleChange} value={form.gender} placeholder={'gender'} />

                <label htmlFor={'birthDate'}>Weight: </label>
                <input type={'date'} name={'birthDate'} onChange={handleChange} value={form.birthDate} placeholder={'Birth Date'} />

                <label htmlFor={'avatarUrl'}>Pet photo: </label>
                <input type={'text'} name={'avatarUrl'} onChange={handleChange} value={form.avatarUrl} placeholder={'Avatar'} />

                <br/>
                <button>
                    <label htmlFor={'submit'}>Confirm</label>
                    <input type={'submit'} name={'submit'} style={{display: 'none'}}/>
                </button>
            </form>
        </div>
    );
};