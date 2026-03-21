import {imagePlaceholder, type IPet} from "entities/pet/model";
import style from './petCard.module.css'
import {Link} from "react-router-dom";

interface Props {
    pet: IPet
}

export const PetCard = ({ pet }: Props) => {

    const petAge = new Date().getFullYear() - pet.birthDate.getFullYear();

    return (
        <div className={style.box}>
            <Link to={'/pet/' + pet.id}>
                <div className={style.imageBox}>
                    <img src={pet.photoUrl ? pet.photoUrl : imagePlaceholder} alt={pet.breed + ' image'} />
                </div>
                <h3>{pet.name}</h3>
                <p>
                    <span>{petAge} years, </span>
                    <span>{pet.breed}, </span>
                    <span>{pet.weight} kg</span>
                </p>
                <Link to={'/edit_pet/' + pet.id}><button>EDIT</button></Link>
            </Link>
            <h1>Next events ---</h1>
            {/*<ReminderCard/>*/}
            <br/>
        </div>
    );
};