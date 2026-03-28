import {useAllPetsByUserId} from "entities/petOwner/hooks";
import style from "pages/homePage/ui/homePage.module.css";
import {PetCard} from "entities/pet/ui/petCard";
import {useAllPets} from "entities/pet/hooks";
import {useAllPetOwners} from "entities/petOwner/hooks/useAllPetOwners.ts";


export const PetListPage = () => {

    const currentUserId = '00';

    const { data, error, isLoading } = useAllPetsByUserId(currentUserId);
    const petsQuery = useAllPets();
    const pO = useAllPetOwners();

    return (
        <div>
            {pO.isLoading ? <p>loaaaaaading</p> :
                pO.error ? <p>oooooopppssss : {pO.error.message}</p> :
                    <div>
                        {pO.data?.data.map((el) =>
                            <div key={el.id}>
                                <p>pet {el.petId}</p>
                                <p>user {el.userId}</p>
                                <p>role {el.ownerRole}</p>
                                <p>{el.invitedById ? 'invite: ' + el.invitedById : ''}</p>
                            </div>
                        )}
                    </div>
            }
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