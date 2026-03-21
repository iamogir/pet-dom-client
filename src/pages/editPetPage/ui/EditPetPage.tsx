import {PetForm} from "entities/pet/ui/petForm";
import {useNavigate, useParams} from "react-router-dom";
import {usePetById} from "entities/pet/hooks";

export const EditPetPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { data } = usePetById(id ?? '');
    if (!data) navigate('/')

    return (
        <div>
            <h1>What do you want to edit?</h1>
            <PetForm pet={data} />
        </div>
    );
};