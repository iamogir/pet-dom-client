import {useAllPetsByUserId} from "entities/petOwner/hooks";
import style from "pages/homePage/ui/homePage.module.css";
import {PetCard} from "entities/pet/ui/petCard";

export const PetListPage = () => {

    const currentUserId = '00';

    const { data, error, isLoading } = useAllPetsByUserId(currentUserId);

    return (
        <div>
            {isLoading ? <p> One second, checking pets...</p> :
                error ? <p>Oh, something goes wrong: {error.message}</p> :
                    <div className={style.petCards}>
                        {data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                    </div>
            }
        </div>
    );
};