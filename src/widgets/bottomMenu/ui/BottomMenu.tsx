import {NavLink} from "react-router-dom";
import style from './bottomMenu.module.css'
import {navItems} from "shared/const";

export const BottomMenu = () => {

    return (
        <nav className={style.menu}>
        {navItems.map(el =>
            <NavLink key={el.to} to={el.to}>
                {( {isActive} ) => {
                    const Icon = isActive ? el.activeIcon : el.icon;
                    return (
                        <Icon className={style.btn}/>
                    )
                }}
            </NavLink>
        )}
        </nav>
    );
};