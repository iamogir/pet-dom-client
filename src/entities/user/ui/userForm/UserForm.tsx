import style from "./userForm.module.css"
import {useState} from "react";
import type {IUser, IUserForm} from "entities/user/model";
import {imagePlaceholder} from "entities/pet/model";

interface Props {
    user: IUser
}

export const UserForm = ({user} : Props) => {

    const [form, setForm] = useState<IUserForm>({
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        country: user.country,
        birthDate: user.birthDate.toString(),
        gender: user.gender,
        avatarUrl: user.avatarUrl ?? imagePlaceholder,
        confirm: false
    })

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <form className={style.box} onSubmit={handleSubmit}>
                <label htmlFor={'firstName'}>First name: </label>
                <input type={'text'} name={'firstName'} onChange={handleChange} value={form.firstName} placeholder={'First Name'} />

                <label htmlFor={'lastName'}>Last name: </label>
                <input type={'text'} name={'lastName'} onChange={handleChange} value={form.lastName} placeholder={'Last Name'} />

                <label htmlFor={'phoneNumber'}>Phone: </label>
                <input type={'text'} name={'phoneNumber'} onChange={handleChange} value={form.phoneNumber} placeholder={'Phone Number'} />

                <label htmlFor={'country'}>Living country: </label>
                <input type={'text'} name={'country'} onChange={handleChange} value={form.country} placeholder={'Country'} />

                <label htmlFor={'gender'}>gender: </label>
                <input type={'text'} name={'gender'} onChange={handleChange} value={form.gender} placeholder={'gender'} />

                <label htmlFor={'birthDate'}>B-day: </label>
                <input type={'date'} name={'birthDate'} onChange={handleChange} value={form.birthDate} placeholder={'Birth Date'} />

                <label htmlFor={'avatarUrl'}>Profile photo: </label>
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