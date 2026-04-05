import {useAllPetsByUserId} from "entities/petOwner/hooks";
import style from "pages/homePage/ui/homePage.module.css";
import {PetCard} from "entities/pet/ui/petCard";
import {useAllPets} from "entities/pet/hooks";
import {useAllPetOwners} from "entities/petOwner/hooks/useAllPetOwners.ts";
import {useMe} from "features/auth/hooks";
import {useSearchParams} from "react-router-dom";
import {petBreed, petSpecies} from "entities/pet/model";


export const PetListPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name") || '';
    const type = searchParams.get("type") || '';
    const breed = searchParams.get("breed") || '';

    const me = useMe();
    const user = useAllPetsByUserId(me.data?.id);
    const petsQuery = useAllPets();
    const pO = useAllPetOwners();

    const handleFilterChange = (event) => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            const eventTarget = event.target;
            const value = eventTarget.value;
            const name = eventTarget.name;

            if (value) params.set(name, value);
                else params.delete(name);

            return params;
        })
    }

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
            {user.isLoading ? <p> One second, checking pets...</p> :
                user.error ? <p>Oh, something goes wrong: {user.error.message}</p> :
                    <div className={style.petCards}>
                        {user.data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                    </div>
            }
            <h1>ALL APP PETS</h1>
            <p> Type filter</p>
            <select>
                <option value="">all pet types</option>
                {petSpecies.map(sp => <option key={sp}>{sp}</option>)}
            </select>
            <p>Breed filter</p>
            <select value={breed} name={'breed'} onChange={handleFilterChange}>
                <option value="">all breeds</option>
                {petBreed.map(br => <option key={br}>{br}</option>)}
            </select>
            {petsQuery.isLoading ? <p>Loading...</p> :
                petsQuery.error ? <p>{petsQuery.error.message}</p> :
                    <div className={style.petCards}>
                        {petsQuery.data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                    </div>
            }
        </div>
    );
};