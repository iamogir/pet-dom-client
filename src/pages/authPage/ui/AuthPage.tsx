import {Link, useNavigate} from "react-router-dom";
import style from './authPage.module.css'
import {type ChangeEvent, useState} from "react";
import {useLogin} from "features/auth/hooks";
import {useAuth} from "features/auth/context";
import {fromServerUserResponseDto, setToken, toServerFormLoginDto} from "features/auth/utils";
import type {ILoginForm, IUserResponse, IUserResponseDto} from "features/auth/types";

export const AuthPage = () => {

    const { mutateAsync } = useLogin();
    const { setUser } = useAuth();
    const navigate = useNavigate();
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

        const resDto: IUserResponseDto = await mutateAsync(toServerFormLoginDto(form));
        const res: IUserResponse = fromServerUserResponseDto(resDto);

        setToken(res.token);
        setUser(res.user);

        navigate("/");

    }

    return (
        <div className={style.box}>
            <p>Welcome, please, sign in to your account or <Link to={'/sign_up'}><span>sign up</span></Link></p>
            <div className={style.content}>
                <h2>SIGN IN</h2>
                <form onSubmit={handleLogIn}>
                    <label htmlFor={'email'}>Login:
                    <input type={'email'} name={'email'} onChange={handleChange} value={form.email} placeholder={'abc@mail.com'} /></label>

                    <label htmlFor={'password'}>Password:
                    <input type={'password'} name={'password'} onChange={handleChange} value={form.password} placeholder={'*****'} /></label>

                    <button type="submit" className={style.btn}>Log in</button>
                </form>
            </div>
        </div>
    );
};