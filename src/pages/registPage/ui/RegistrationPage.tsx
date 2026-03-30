import {Link} from "react-router-dom";
import style from './registrationPage.module.css'

export const RegistrationPage = () => {

    const handleSignUp = (event) => {
        event.preventDefault()
    }

    return (
        <div className={style.box}>
            <p>Welcome, let's get acquainted or <Link to={'/sign_in'}><span>sign in</span></Link></p> to your account!
            <div className={style.content}>
                <h2>SIGN UP</h2>
                <form onSubmit={handleSignUp}>
                    <label htmlFor={'email'}>e-mail:
                        <input type={'email'} name={'email'} placeholder={'abc@mail.com'} /></label>

                    <label htmlFor={'password'}>Password:
                        <input type={'password'} name={'password'} placeholder={'*****'} /></label>

                    <button type="submit" className={style.btn}>Sign up</button>
                </form>
            </div>
        </div>
    );
};