import {PetForm} from "entities/pet/ui/petForm";
import {useNavigate, useParams} from "react-router-dom";
import {useDeletePetById, usePetById} from "entities/pet/hooks";
import style from './editPetPage.module.css'
import {Button} from "shared/ui/button";

export const EditPetPage = () => {

    const { id } = useParams();
    const { data } = usePetById(id ?? '');

    const deletePet = useDeletePetById();
    const navigate = useNavigate();

    return (
        <div className={style.container}>
            <h1>What do you want to edit?</h1>
            {data && <PetForm pet={data} /> }
            <Button onClick={() => { deletePet.mutate(id ?? ''); navigate('/my_pets')}} text={'Delete pet'} />
        </div>
    );
};