import style from "./navigation.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import SignOut from '../../../shared/assert/icons/sign-out.svg?react'
import Profile from '../../../shared/assert/icons/profile.svg?react'
import {useAuth} from "features/auth/context";
import {navItemsDesk} from "shared/const";

export const Navigation = () => {

    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleLogout = () => {
        logout()
        navigate("/sign_in");
    }

    return (
        <nav className={style.menu}>
            <div className={style.items}>{navItemsDesk.map(el =>
                <NavLink key={el.to} to={el.to}>{el.label}</NavLink>
            )}</div>
            <div className={style.icons}>
                <NavLink to={'/user/me'}><Profile className={style.profile}/></NavLink>
                <SignOut className={style.icon} onClick={handleLogout}/>
            </div>
        </nav>
    );
};