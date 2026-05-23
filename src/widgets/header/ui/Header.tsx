import style from './header.module.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "features/auth/context";
// import {useMe} from "features/auth/hooks";
import SignOut from '../../../shared/assert/icons/sign-out.svg?react'
import Profile from '../../../shared/assert/icons/profile.svg?react'


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
            <div className={style.menu}>
                <button className={style.btn} onClick={() => navigate('/home')}>Home</button>
                <button className={style.btn} onClick={() => navigate('/my_pets')}>My pets</button>
                <button className={style.btn} onClick={() => navigate('#')}>Notifications</button>
                <button className={style.btn} onClick={() => navigate('#')}>Documents</button>
            </div>
            <div className={style.icons}>
                <Profile className={style.profile} onClick={() => navigate('/user/me')}/>
                <SignOut className={style.icon} onClick={handleLogout}/>
            </div>
        </div>
    );
};