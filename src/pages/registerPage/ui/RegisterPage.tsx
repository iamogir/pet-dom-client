import {Link, useNavigate} from "react-router-dom";
import style from './registerPage.module.css'
import {type ChangeEvent, type SubmitEvent, useState} from "react";
import {useRegister} from "features/auth/hooks";
import {setToken, toServerFormRegister} from "features/auth/utils";
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
        name: ''
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        event.preventDefault();

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

                    <label htmlFor={'name'}>name:
                        <input type={'text'} name={'name'} value={form.name} onChange={handleChange} placeholder={'Zina'} /></label>

                    <label htmlFor={'email'}>e-mail:
                        <input type={'email'} name={'email'} value={form.email} onChange={handleChange} placeholder={'abc@mail.com'} /></label>

                    <label htmlFor={'password'}>password:
                        <input type={'password'} name={'password'} value={form.password} onChange={handleChange} placeholder={'*****'} /></label>

                    <button type="submit" className={style.btn}>Sign up</button>
                </form>
            </section>
        </main>
    );
};