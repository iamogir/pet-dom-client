import style from './header.module.css'
import {Navigation} from "widgets/navigation";
import {useLocation} from "react-router-dom";


export const Header = () => {

    const location = useLocation();

    const isCreatePetPage = location.pathname === 'add_pet';

    return (
        <div className={style.box}>
            <h1>PETDOM</h1>
            <Navigation/>
        </div>
    );
};