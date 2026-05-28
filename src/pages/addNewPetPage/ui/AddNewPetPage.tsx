import {Link} from "react-router-dom";
import {PetForm} from "entities/pet/ui/petForm";

export const AddNewPetPage = () => {

    return (
        <div>
            <h1>New Companion</h1>
            <p>Let's create a profile for your new best friend.</p>
            <p>loading</p>
            <PetForm/>
            <Link to={'/user'}><button>Back to profile</button></Link>

        </div>
    );
};