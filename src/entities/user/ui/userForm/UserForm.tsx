import style from "./userForm.module.css"
import {type ChangeEvent, useState} from "react";
import type {IUser, IUserForm} from "entities/user/model";
import {imagePlaceholder} from "entities/pet/model";
import {useEditUserById} from "entities/user/hooks";
import {toServerUserObjectUpdate, userGender} from "entities/user/lib";
import {useNavigate} from "react-router-dom";
import {DropMenu} from "shared/ui/dropMenu";

interface Props {
    user: IUser
}

export const UserForm = ({user} : Props) => {

    const navigate = useNavigate();
    const { mutate } = useEditUserById();
    const [form, setForm] = useState<IUserForm>(() => {
        const bDay = user?.birthDate.getFullYear() + '-' +
            String(user?.birthDate ? (user?.birthDate.getMonth() + 1) : '').padStart(2, '0') + '-' +
            String(user?.birthDate.getDate()).padStart(2, '0');
        return {
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            country: user.country,
            birthDate: bDay,
            gender: user.gender,
            avatarUrl: user.avatarUrl ?? imagePlaceholder,
            confirm: false
        }
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // event.preventDefault();
        const eventTarget = event.target;
        // setForm(prev => ({...prev,  [eventTarget.name]: eventTarget.value }))
        doSetForm(eventTarget.name, eventTarget.value);
    }

    const doSetForm = (name: string, value: string) => {
        setForm(prev => ({...prev,  [name]: value }))
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const isConfirmed = confirm('Are you sure?');
        if (!isConfirmed) return;

        mutate(toServerUserObjectUpdate(form));

        navigate("/user/" + user.id);
    }

    const showBlock = (event) => {
        event.target.classList.toggle('hide');
    }

    return (
        <div>
            <form className={style.box} onSubmit={handleSubmit}>
                <label htmlFor={'firstName'}>First name: </label>
                <input type={'text'} name={'firstName'} onChange={handleChange} value={form.firstName} placeholder={'First Name'} />

                <label htmlFor={'lastName'}>Last name: </label>
                <input type={'text'} name={'lastName'} onChange={handleChange} value={form.lastName} placeholder={'Last Name'} />

                <label htmlFor={'phoneNumber'}>Phone: </label>
                <input type={'tel'} name={'phoneNumber'} onChange={handleChange} value={form.phone} placeholder={'+972 54 851 99 65'} />

                <label htmlFor={'country'}>Living country: </label>
                <input type={'text'} name={'country'} onChange={handleChange} value={form.country} placeholder={'Country'} />

                <label htmlFor={'gender'}>gender: </label>
                <input type={'text'} readOnly={true} value={form.gender} name={'gender'} onClick={showBlock} />

                <DropMenu values={userGender}  onSelect={(value: string) => doSetForm('gender', value)}/>

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