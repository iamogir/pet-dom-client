import style from './newPetButton.module.css'
import Add from '../../../../shared/assert/icons/add.svg?react'
import {useNavigate} from "react-router-dom";

export const NewPetButton = () => {
    const navigate = useNavigate();

    return (
        <div className={style.box} onClick={() => navigate(('/add_pet'))}>
            <Add className={style.addBtn}/>
        </div>
    );
};