import style from './header.module.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "features/auth/context";
import {useMe} from "features/auth/hooks";

export const Header = () => {

    const user = useMe();
    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleLogout = () => {
        logout()
        navigate("/sign_in");
    }

    return (
        <div className={style.box}>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/user/' + user.data?.id)}>My profile</button>
            <button onClick={() => navigate('/my_pets')}>Global pets</button>
            <button onClick={handleLogout}>Sign o u t</button>
        </div>
    );
};