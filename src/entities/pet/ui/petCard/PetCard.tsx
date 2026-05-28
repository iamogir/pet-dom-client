import {type IPet} from "entities/pet/model";
import style from './petCard.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useDeletePetById} from "entities/pet/hooks";
import {useQueryClient} from "@tanstack/react-query";
import {petQueryKeys} from "entities/pet/api";
import {getPetAvatar} from "entities/pet/lib";
import Paw from 'shared/assert/icons/paw-filled.svg?react'
import Calendar from '../../../../shared/assert/icons/calendar.svg?react'

interface Props {
    pet: IPet
}

export const PetCard = ({ pet }: Props) => {

    const petAge = new Date().getFullYear() - pet.birthDate.getFullYear();
    const bDay: string = String(pet.birthDate.getDate()).padStart(2, '0') + '/' + String(pet.birthDate.getMonth() + 1).padStart(2, '0') + '/' + pet.birthDate.getFullYear();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutateAsync } = useDeletePetById(
        {
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: petQueryKeys.all})
        }
    );

    // const handleDelete = async () => {
    //     const isConfirmed = confirm("Are you sure you want to delete this pet?");
    //     if (isConfirmed) {
    //         const deletedPet = await mutateAsync(pet.id);
    //         alert('Pet ' + deletedPet.name + ' was successfully deleted.')
    //     }
    // }

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
                        <p>{pet.breed}</p>
                    </div>
                    <div>
                        <Calendar className={style.icon}/>
                        <p>{petAge} years</p>
                    </div>
                </div>
            </section>
        </Link>
        </article>
    );
};