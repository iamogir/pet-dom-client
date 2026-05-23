import style from './header.module.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "features/auth/context";
// import {useMe} from "features/auth/hooks";
import SignOut from '../../../shared/assert/icons/sign-out.svg?react'

export const Header = () => {

    // const user = useMe();
    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleLogout = () => {
        logout()
        navigate("/sign_in");
    }

    return (
        <div className={style.box}>
            <h1>PETDOM</h1>
            <div>
                <button className={style.btn} onClick={() => navigate('/home')}>Home</button>
                <button className={style.btn} onClick={() => navigate('/my_pets')}>Global pets</button>
            </div>
                <button className={style.btn} onClick={() => navigate('/user/me')}>My profile</button>
                <SignOut className={style.icon} />
        </div>
    );
};