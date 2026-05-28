import style from './newPetButton.module.css'
import Add from '../../../../shared/assert/icons/add.svg?react'
import {useLocation, useNavigate} from "react-router-dom";

export const NewPetButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const openAddPet = () => {
        navigate('/add_pet', {
            state: {
                backgroundLocation: location
            }
        });
    };

    return (
        <div className={style.box} onClick={openAddPet}>
            <Add className={style.addBtn}/>
            <p>ADD NEW PET</p>
        </div>
    );
};