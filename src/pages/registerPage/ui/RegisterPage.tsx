import {Link, useNavigate} from "react-router-dom";
import style from './registerPage.module.css'
import {type ChangeEvent, type SubmitEvent, useState} from "react";
import {useRegister} from "features/auth/hooks";
import {useAuth} from "features/auth/context";
import {fromServerUserResponseDto, setToken, toServerFormRegister} from "features/auth/utils";
import type {IRegisterForm, IUserResponse, IUserResponseDto} from "features/auth/types";

export const RegisterPage = () => {

    const { mutateAsync } = useRegister();
    const { setUser } = useAuth();
    const navigate = useNavigate();
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

        const resDto: IUserResponseDto = await mutateAsync(toServerFormRegister(form));

        const res: IUserResponse = fromServerUserResponseDto(resDto);

        setToken(res.token);
        setUser(res.user);

        navigate("/");

    }

    return (
        <div className={style.box}>
            <p>Welcome, let's get acquainted or <Link to={'/sign_in'}><span>sign in</span></Link></p> to your account!
            <div className={style.content}>
                <h2>SIGN UP</h2>
                <form onSubmit={handleSignUp}>

                    <label htmlFor={'name'}>name:
                        <input type={'text'} name={'name'} value={form.name} onChange={handleChange} placeholder={'Zina'} /></label>

                    <label htmlFor={'email'}>e-mail:
                        <input type={'email'} name={'email'} value={form.email} onChange={handleChange} placeholder={'abc@mail.com'} /></label>

                    <label htmlFor={'password'}>password:
                        <input type={'password'} name={'password'} value={form.password} onChange={handleChange} placeholder={'*****'} /></label>

                    <button type="submit" className={style.btn}>Sign up</button>
                </form>
            </div>
        </div>
    );
};