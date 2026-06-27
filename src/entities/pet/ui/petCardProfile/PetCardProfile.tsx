import type {IPet} from "entities/pet/model";
import {Button} from "shared/ui/button";
import style from './petCardProfile.module.css'
import {useNavigate} from "react-router-dom";

interface Props {
    pet: IPet
}

export const PetCardProfile = ({ pet }: Props) => {

    const petAge = pet.birthDate ? new Date().getFullYear() - pet.birthDate.getFullYear() : null;

    const navigate = useNavigate();

    return (
        <article className={style.container}>
            <img src={pet.photoUrl} alt={pet.name}/>
            <span>{pet.species.toUpperCase()}</span>
            <section className={style.data}>
                <p>{pet.name}</p>
                <span>{pet.species.toUpperCase()}</span>
                <p><span>{pet.breed || 'No breed'}</span><span>•</span><span>{petAge || 'Unknown age'}</span></p>
            </section>
            <section className={style.info}>
                <div>
                    <p>WEIGHT</p>
                    <p>{pet.weight || ''}</p>
                </div>
                <div>
                    <p>BIRTH DAY</p>
                    <p>{pet.weight || ''}</p>
                </div>
            </section>
            <Button onClick={() => navigate('/edit_pet/' + pet.id)} text={'Edit profile'} />
        </article>
    );
};

export default PetCardProfile;