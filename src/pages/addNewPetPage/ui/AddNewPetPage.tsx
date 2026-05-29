import {Link} from "react-router-dom";
import {PetForm} from "entities/pet/ui/petForm";
import style from './addNewPetPage.module.css'

export const AddNewPetPage = () => {

    return (
        <div className={style.box}>
            <h1>New Companion</h1>
            <p>Let's create a profile for your new best friend.</p>
            <p className={style.steps}>Progress dots</p>
            <PetForm/>

        </div>
    );
};