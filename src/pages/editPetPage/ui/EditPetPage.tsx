import {PetForm} from "entities/pet/ui/petForm";
import {useParams} from "react-router-dom";
import {usePetById} from "entities/pet/hooks";

export const EditPetPage = () => {

    const { id } = useParams();
    const { data } = usePetById(id ?? '');

    return (
        <div>
            <h1>What do you want to edit?</h1>
            {data && <PetForm pet={data} /> }
        </div>
    );
};