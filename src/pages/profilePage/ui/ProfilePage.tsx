import {Link} from "react-router-dom";
import {useUserById} from "entities/user/hooks";
import {UserCard} from "entities/user/ui/userCard";
import {PetCard} from "entities/pet/ui/petCard";
import {useAllPetsByUserId} from "entities/petOwner/hooks";

export const ProfilePage = () => {

    const userTemp = '00'

    const { isLoading, data, error } = useUserById(userTemp);
    const petsByUserQuery = useAllPetsByUserId(userTemp);

    return (
        <div>
            <h2>Welcome to your profile!</h2>
            <h3>Check pets, sent tasks to family members and keep pet health excellent!</h3>
            {isLoading ? <p>Loading...</p> :
                (error ? <p>Oh, where is the data? Amiss! - {error.message}</p> :
                    <div>
                        {data ? <UserCard key={data.id} user={data} /> : null }

                        <h2>PETS BY USER {userTemp}</h2>
                        { petsByUserQuery.isLoading ? <p>loading...</p> :
                            (!petsByUserQuery.data ? <p>No data</p> :
                                petsByUserQuery.data.data.map(p => <PetCard key={p.id} pet={p} />)
                            )
                        }
                    </div>
                )
            }

            <Link to='/home'><button>to home</button></Link>
        </div>
    );
};