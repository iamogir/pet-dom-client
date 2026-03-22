import {useAllPetsByUserId} from "entities/petOwner/hooks";
import style from "pages/homePage/ui/homePage.module.css";
import {PetCard} from "entities/pet/ui/petCard";
import {useAllPets} from "entities/pet/hooks";


export const PetListPage = () => {

    const currentUserId = '00';

    const { data, error, isLoading } = useAllPetsByUserId(currentUserId);
    const petsQuery = useAllPets();

    return (
        <div>
            {isLoading ? <p> One second, checking pets...</p> :
                error ? <p>Oh, something goes wrong: {error.message}</p> :
                    <div className={style.petCards}>
                        {data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                    </div>
            }
            <h1>ALL APP PETS</h1>
            {petsQuery.isLoading ? <p>Loading...</p> :
                petsQuery.error ? <p>{petsQuery.error.message}</p> :
                    <div className={style.petCards}>
                        {petsQuery.data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                    </div>
            }
        </div>
    );
};