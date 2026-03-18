import {Link} from "react-router-dom";
import {useAllUsersByPetId} from "entities/petOwner/hooks";
import {UserCard} from "entities/user/ui/userCard";

export const PetPage = () => {

    const { isLoading, error, data } = useAllUsersByPetId('0');

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
            <button><Link to='/home'>to home</Link></button>
        </div>
    );
};