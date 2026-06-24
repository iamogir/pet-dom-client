import style from './addNewPetPage.module.css'
import {AddPetForm} from "entities/pet/ui/addPetForm";

export const AddNewPetPage = () => {

    return (
        <div className={style.box}>
            <h1>New Companion</h1>
            <p>Let's create a profile for your new best friend.</p>
            <p className={style.steps}> !! Progress dots !!</p>
            <AddPetForm/>
        </div>
    );
};