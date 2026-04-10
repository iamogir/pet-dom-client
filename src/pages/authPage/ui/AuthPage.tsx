import {Link, useNavigate} from "react-router-dom";
import style from './authPage.module.css'
import {type ChangeEvent, useState} from "react";
import {useLogin} from "features/auth/hooks";
import {fromServerUserResponseDto, setToken, toServerFormLoginDto} from "features/auth/utils";
import type {ILoginForm, IUserResponse, IUserResponseDto} from "features/auth/types";
import {useQueryClient} from "@tanstack/react-query";
import {userQueryKeys} from "entities/user/api";

export const AuthPage = () => {

    const { mutateAsync } = useLogin();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [form, setForm] = useState<ILoginForm>({
        email: '',
        password: '',
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        event.preventDefault()

        setForm((prev: ILoginForm) => ({ ...prev, [event.target.name]: event.target.value }))

    }

    const handleLogIn = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()

        console.log('login')

        const resDto: IUserResponseDto = await mutateAsync(toServerFormLoginDto(form));
        const res: IUserResponse = fromServerUserResponseDto(resDto);

        setToken(res.access_token);
        queryClient.setQueryData(userQueryKeys.me(), res.user);

        navigate("/");

    }

    return (
        <main className={style.box}>
            <h2>Welcome, please, sign in to your account or <Link to={'/sign_up'}><span>sign up</span></Link></h2>
            <section className={style.content}>
                <h1>SIGN IN</h1>
                <form onSubmit={handleLogIn}>
                    <label htmlFor={'email'}>
                        <input type={'email'} name={'email'} onChange={handleChange} value={form.email} placeholder={'abc@mail.com'} />
                    </label>
                    <label htmlFor={'password'}>
                        <input type={'password'} name={'password'} onChange={handleChange} value={form.password} placeholder={'*****'} />
                    </label>

                    <button type="submit" className={style.btn}>Log in</button>
                </form>
            </section>
        </main>
    );
};