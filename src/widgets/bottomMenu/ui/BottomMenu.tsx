import {useNavigate} from "react-router-dom";
import style from './bottomMenu.module.css'

export const BottomMenu = () => {

    const navigate = useNavigate();

    return (
        <nav className={style.menu}>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/my_pets')}>My pets</button>
            <button onClick={() => navigate('/user/me')}>My profile</button>
            <button onClick={() => navigate('#')}>Settings</button>
        </nav>
    );
};