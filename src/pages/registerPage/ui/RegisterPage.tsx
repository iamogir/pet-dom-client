import {Link, Navigate, useNavigate} from "react-router-dom";
import style from './registerPage.module.css'
import {type ChangeEvent, type SubmitEvent, useState} from "react";
import {useRegister} from "features/auth/hooks";
import {getToken, setToken, toServerFormRegister} from "features/auth/utils";
import type {IRegisterForm, IUserResponse} from "features/auth/types";
import {useQueryClient} from "@tanstack/react-query";
import {userQueryKeys} from "entities/user/api";

export const RegisterPage = () => {

    const { mutateAsync } = useRegister();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [form, setForm] = useState<IRegisterForm>({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        country: '',
        birthDate: '1990-01-01',
        gender: '',
        avatarUrl: '',
    })
    const token = getToken();
    if (token) {
        return <Navigate to={`/home`} />
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // event.preventDefault();

        setForm(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSignUp = async (event: SubmitEvent) => {
        event.preventDefault()

        const res: IUserResponse = await mutateAsync(toServerFormRegister(form));
        setToken(res.access_token);
        queryClient.setQueryData(userQueryKeys.me(), res.user);

        navigate("/");

    }

    return (
        <main className={style.box}>
            <h2>Welcome, let's get acquainted or <Link to={'/sign_in'}><span>sign in</span></Link> to your account!</h2>
            <section className={style.content}>
                <h1>SIGN UP</h1>
                <form onSubmit={handleSignUp}>

                    <label htmlFor={'firstName'}>first name:
                        <input type={'text'} name={'firstName'} value={form.firstName} onChange={handleChange} placeholder={'Zina'} /></label>

                    <label htmlFor={'lastName'}>last name:
                        <input type={'text'} name={'lastName'} value={form.lastName} onChange={handleChange} placeholder={'Babuskina'} /></label>

                    <label htmlFor={'email'}>e-mail:
                        <input type={'email'} name={'email'} value={form.email} onChange={handleChange} placeholder={'abc@mail.com'} /></label>

                    <label htmlFor={'password'}>password:
                        <input type={'password'} name={'password'} value={form.password} onChange={handleChange} placeholder={'*****'} /></label>

                    <label htmlFor={'phoneNumber'}>phone number:
                        <input type={'tel'} name={'phoneNumber'} value={form.phoneNumber} onChange={handleChange} placeholder={'+972 54 851 99 65'} /></label>

                    <label htmlFor={'country'}>country:
                        <input type={'text'} name={'country'} value={form.country} onChange={handleChange} placeholder={'Israel'} /></label>

                    <label htmlFor={'birthDate'}>b-day:
                        <input type={'date'} name={'birthDate'} value={form.birthDate} onChange={handleChange} placeholder={'1990-02-01'} /></label>

                    <div>
                        <span> gender: </span>
                        <label htmlFor={'male'}>male </label>
                        <input type={'radio'} id={'male'} checked={form.gender === 'male'} name={'gender'} value={'male'} onChange={handleChange}/>
                        <label htmlFor={'female'}>female </label>
                        <input type={'radio'} id={'female'} checked={form.gender === 'female'} name={'gender'} value={'female'} onChange={handleChange}/>
                    </div>

                    <button type="submit" className={style.btn}>Sign up</button>
                </form>
            </section>
        </main>
    );
};