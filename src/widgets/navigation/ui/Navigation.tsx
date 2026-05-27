import style from "./navigation.module.css";
import {useNavigate} from "react-router-dom";

export const Navigation = () => {

    const navigate = useNavigate();

    return (
        <nav className={style.menu}>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/my_pets')}>My pets</button>
            <button onClick={() => navigate('#')}>Notifications</button>
            <button onClick={() => navigate('#')}>Documents</button>
        </nav>
    );
};