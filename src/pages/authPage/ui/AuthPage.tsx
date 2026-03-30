import {Link} from "react-router-dom";
import style from './authPage.module.css'
import type {ILogin} from "pages/homePage";
import {useState} from "react";

export const AuthPage = () => {

    const [form, setForm] = useState<ILogin>({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        event.preventDefault()
    }

    const handleLogIn = (event) => {
        event.preventDefault()
    }

    return (
        <div className={style.box}>
            <p>Welcome, please, sign in to your account or <Link to={'/sign_up'}><span>sign up</span></Link></p>
            <div className={style.content}>
                <h2>SIGN IN</h2>
                <form onSubmit={handleLogIn}>
                    <label htmlFor={'login'}>Login:
                    <input type={'email'} name={'login'} value={form.email} placeholder={'abc@mail.com'} /></label>

                    <label htmlFor={'password'}>Password:
                    <input type={'password'} name={'password'} value={form.password} placeholder={'*****'} /></label>

                    <button type="submit" className={style.btn}>Log in</button>
                </form>
            </div>
        </div>
    );
};