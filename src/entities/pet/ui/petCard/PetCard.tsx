import {imagePlaceholder, type IPet} from "entities/pet/model";
import style from './petCard.module.css'

interface Props {
    pet: IPet
}

export const PetCard = ({ pet }: Props) => {

    const petAge = new Date().getFullYear() - pet.birthDate.getFullYear();

    return (
        <div className={style.box}>
            <div className={style.imageBox}>
                <img className={style.image} src={pet.photoUrl ? pet.photoUrl : imagePlaceholder} alt={pet.breed + ' image'} />
            </div>
            <h3>{pet.name}</h3>
            <p>
                <span>{petAge} years, </span>
                <span>{pet.breed}, </span>
                <span>{pet.weight} kg</span>
            </p>
            <h1>Next events ---</h1>
            {/*<ReminderCard/>*/}
        </div>
    );
};