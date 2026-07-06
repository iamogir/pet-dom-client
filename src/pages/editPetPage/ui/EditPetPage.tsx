import {PetForm} from "entities/pet/ui/petForm";
import {useParams} from "react-router-dom";
import {usePetById} from "entities/pet/hooks";
import style from './editPetPage.module.css'

export const EditPetPage = () => {

    const { id } = useParams();
    const { data } = usePetById(id ?? '');

    return (
        <div className={style.container}>
            <h1>What do you want to edit?</h1>
            {data && <PetForm pet={data} /> }
        </div>
    );
};