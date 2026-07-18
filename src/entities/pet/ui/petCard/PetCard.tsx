import {type IPet} from "entities/pet/model";
import style from './petCard.module.css'
import {Link} from "react-router-dom";
import {getPetAvatar} from "entities/pet/lib";
import Paw from 'shared/assert/icons/paw-filled.svg?react'
import Calendar from '../../../../shared/assert/icons/calendar.svg?react'

interface Props {
    pet: IPet
}

export const PetCard = ({ pet }: Props) => {

    const petAge = pet.birthDate ? new Date().getFullYear() - pet.birthDate.getFullYear() : null;

    return (
        <article className={style.box}>
        <Link className={style.link} to={'/pet/' + pet.id}>
            <section className={style.imageBox} style={ {backgroundImage: `url(${pet.photoUrl ? pet.photoUrl : getPetAvatar(pet.species)})`}}>
                <div>
                    <span>{pet.species.toUpperCase()}</span>
                </div>
            </section>
            <section className={style.infoBox}>
                <p className={style.petName}>{pet.name.toUpperCase()}</p>
                <div className={style.info}>
                    <div>
                        <Paw className={style.icon}/>
                        {pet.breed ? <p>{pet.breed}</p> : <p>{pet.species}</p>}
                    </div>
                    {petAge !== null && petAge !== undefined &&
                        <div>
                            <Calendar className={style.icon}/>
                            <p>{petAge} years</p>
                        </div>
                    }
                </div>
            </section>
        </Link>
        </article>
    );
};