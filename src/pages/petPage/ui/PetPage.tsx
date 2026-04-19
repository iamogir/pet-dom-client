import {Link} from "react-router-dom";
import {UserCard} from "entities/user/ui/userCard";
import {usePetById} from "entities/pet/hooks";
import {PetCard} from "entities/pet/ui/petCard";
import {useAllUsersByPetId} from "entities/user/hooks";

interface Props {
    petId: string
}

export const PetPage = ({ petId }: Props) => {

    const { isLoading, error, data } = useAllUsersByPetId(petId);
    const petData = usePetById(petId);

    return (
        <div>
            {petData.isLoading ? <p>loading</p> :
                petData.error ? <p>{petData.error.message}</p> :
                    petData.data ? <PetCard pet={petData.data}/> :
                        <p>NOTHING TO SHOW</p>
            }
            {isLoading ? <p>one second...</p> :
                <div>
                    <h2>all users of selected pet:</h2>
                    { error ? <p>{error.message}</p> :
                            data?.data.map(u => <UserCard key={u.id} user={u} />)
                    }
                </div>
            }
            <Link to='/home'><button>to home</button></Link>
        </div>
    );
};