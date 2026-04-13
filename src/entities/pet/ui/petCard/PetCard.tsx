import {imagePlaceholder, type IPet} from "entities/pet/model";
import style from './petCard.module.css'
import {Link, useNavigate} from "react-router-dom";
// import {useDeletePetById} from "entities/pet/hooks";
// import {useQueryClient} from "@tanstack/react-query";
// import {petQueryKeys} from "entities/pet/api";

interface Props {
    pet: IPet
}

export const PetCard = ({ pet }: Props) => {

    const petAge = new Date().getFullYear() - pet.birthDate.getFullYear();
    const bDay: string = pet.birthDate.getDate() + '/' + (pet.birthDate.getMonth() + 1) + '/' + pet.birthDate.getFullYear();
    // const queryClient = useQueryClient();
    const navigate = useNavigate();
    // const { mutateAsync } = useDeletePetById({
    //     onSuccess: () =>
    //         queryClient.invalidateQueries({ queryKey: petQueryKeys.all})
    //
    // });



    // const handleDelete = async () => {
    //     const isConfirmed = confirm("Are you sure you want to delete this pet?");
    //     if (isConfirmed) {
    //         const deletedPet = await mutateAsync(pet.id);
    //         alert('Pet ' + deletedPet.name + ' was successfully deleted.')
    //     }
    // }

    return (
        <article className={style.box}>
            <section className={style.info}>
                <Link to={'/pet/' + pet.id}>
                    <div className={style.imageBox}>
                        <img src={pet.photoUrl ? pet.photoUrl : imagePlaceholder} alt={pet.breed + ' image'}/>
                    </div>
                </Link>
                <ul>
                    <Link to={'/pet/' + pet.id}>
                        <li className={style.petName}>{pet.name}</li>
                    </Link>
                    <li>{petAge} years</li>
                    <li>{pet.breed}</li>
                    <li>{pet.weight} kg</li>
                    <li>Birth-d: {bDay}</li>
                </ul>
            </section>
            <section>
                <h3>Next events ---</h3>
                {/*<ReminderCard/>*/}
            </section>
            <section className={style.btn}>
                <button onClick={() => navigate('/edit_pet/' + pet.id)}>EDIT</button>
                {/*<button onClick={handleDelete}>DELETE</button>*/}
            </section>
        </article>
    );
};