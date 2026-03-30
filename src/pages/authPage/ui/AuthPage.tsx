import {Link} from "react-router-dom";
import style from './authPage.module.css'

export const AuthPage = () => {

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
                    <input type={'email'} name={'login'} placeholder={'abc@mail.com'} /></label>

                    <label htmlFor={'password'}>Password:
                    <input type={'password'} name={'password'} placeholder={'*****'} /></label>

                    <button type="submit" className={style.btn}>Log in</button>
                </form>
            </div>
        </div>
    );
};