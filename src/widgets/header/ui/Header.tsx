import style from './header.module.css'
import {Link, useNavigate} from "react-router-dom";
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
            <Link to={'/user/' + user.data?.id}><button>My profile</button></Link>
            <button onClick={handleLogout}>Sign o u t</button>
        </div>
    );
};