import {Link} from "react-router-dom";
import {useAllUsersByPetId} from "entities/petOwner/hooks";
import {UserCard} from "entities/user/ui/userCard";

interface Props {
    petId: string
}

export const PetPage = ({ petId }: Props) => {

    const { isLoading, error, data } = useAllUsersByPetId(petId);

    return (
        <div>
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