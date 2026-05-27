import style from './header.module.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "features/auth/context";
// import {useMe} from "features/auth/hooks";
import SignOut from '../../../shared/assert/icons/sign-out.svg?react'
import Profile from '../../../shared/assert/icons/profile.svg?react'
import {Navigation} from "widgets/navigation";


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
            <Navigation/>
            <div className={style.icons}>
                <Profile className={style.profile} onClick={() => navigate('/user/me')}/>
                <SignOut className={style.icon} onClick={handleLogout}/>
            </div>
        </div>
    );
};