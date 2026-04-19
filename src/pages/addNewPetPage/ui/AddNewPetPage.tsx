import {Link} from "react-router-dom";
import {PetForm} from "entities/pet/ui/petForm";

export const AddNewPetPage = () => {

    return (
        <div>
            <h2>Write information about your new pet:</h2>
            <br/>
            <PetForm/>
            <Link to={'/user'}><button>Back to profile</button></Link>

        </div>
    );
};