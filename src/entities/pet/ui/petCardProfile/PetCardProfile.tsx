import type {IPet} from "entities/pet/model";
import {Button} from "shared/ui/button";
import {useEditPet} from "entities/pet/hooks";

interface Props {
    pet: IPet
}

export const PetCardProfile = ({ pet }: Props) => {

    const petAge = pet.birthDate ? new Date().getFullYear() - pet.birthDate.getFullYear() : null;

    const edit = useEditPet();

    const handleEditPet = () => {
        // edit.mutate();
    }

    return (
        <article>
            <img src={pet.photoUrl} alt={pet.name}/>
            <section>
                <p>{pet.name}</p>
                <p><span>{pet.breed || 'No breed'}</span>•<span>{petAge || 'Unknown age'}</span></p>
            </section>
            <section>
                <div>
                    <p>WEIGHT</p>
                    <p>{pet.weight || ''}</p>
                </div>
                <div>
                    <p>BIRTH DAY</p>
                    <p>{pet.weight || ''}</p>
                </div>
            </section>
            <Button onClick={handleEditPet} text={'Edit profile'} />
        </article>
    );
};

export default PetCardProfile;