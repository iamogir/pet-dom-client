import style from './header.module.css'
import {Navigation} from "widgets/navigation";


export const Header = () => {

    return (
        <div className={style.box}>
            <h1>PETDOM</h1>
            <Navigation/>
        </div>
    );
};