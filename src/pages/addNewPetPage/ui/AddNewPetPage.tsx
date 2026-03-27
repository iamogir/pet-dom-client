import {Link} from "react-router-dom";
import {PetForm} from "entities/pet/ui/petForm";

export const AddNewPetPage = () => {

    const currentUser = '00';

    return (
        <div>
            <h2>Write information about your new pet:</h2>
            <br/>
            <PetForm ownerId={currentUser}/>
            <Link to={'/user'}><button>Back to profile</button></Link>

        </div>
    );
};