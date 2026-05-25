import {type IPet} from "entities/pet/model";
import style from './petCard.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useDeletePetById} from "entities/pet/hooks";
import {useQueryClient} from "@tanstack/react-query";
import {petQueryKeys} from "entities/pet/api";
import {getPetAvatar} from "entities/pet/lib";

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
            {/*<section className={style.info}>*/}
                <Link to={'/pet/' + pet.id}>
                    <section className={style.imageBox} style={ {backgroundImage: `url(${pet.photoUrl ? pet.photoUrl : getPetAvatar(pet.species)})`}}>
                        <div>
                            <span>{pet.species.toUpperCase()}</span>
                        </div>
                    </section>
                </Link>
                <ul>
                    <li className={style.petName}>{pet.name}</li>
                    <li>{petAge} years</li>
                    <li>{pet.breed}</li>
                </ul>
            {/*</section>*/}
        </article>
    );
};