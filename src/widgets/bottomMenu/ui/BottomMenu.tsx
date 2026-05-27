import {useNavigate} from "react-router-dom";
import style from './bottomMenu.module.css'
import Home from '../../../shared/assert/icons/home.svg?react'
import Paw from '../../../shared/assert/icons/paw.svg?react'
import Settings from '../../../shared/assert/icons/settings.svg?react'
import Profile from '../../../shared/assert/icons/profile.svg?react'

export const BottomMenu = () => {

    const navigate = useNavigate();

    return (
        <nav className={style.menu}>
            <button onClick={() => navigate('/home')}><Home/></button>
            <button onClick={() => navigate('/my_pets')}><Paw/></button>
            <button onClick={() => navigate('/user/me')}><Profile/></button>
            <button onClick={() => navigate('#')}><Settings/></button>
        </nav>
    );
};