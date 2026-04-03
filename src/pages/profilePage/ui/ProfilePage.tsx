import {Link} from "react-router-dom";
import {useUserById} from "entities/user/hooks";
import {UserCard} from "entities/user/ui/userCard";
import {PetCard} from "entities/pet/ui/petCard";
import {useAllPetsByUserId} from "entities/petOwner/hooks";
import style from './profilePage.module.css'

interface Props {
    id: string
}

export const ProfilePage = ({ id }: Props) => {

    const { isLoading, data, error } = useUserById(id);
    const petsByUserQuery = useAllPetsByUserId(id);

    return (
        <div>
            <h2>Welcome to your profile!</h2>
            <h3>Check pets, sent tasks to family members and keep pet health excellent!</h3>
            {isLoading ? <p>Loading...</p> :
                (error ? <p>Oh, where is the data? Amiss! - {error.message}</p> :
                    <div>
                        {data ? <UserCard key={data.id} user={data} /> : null }

                        <h2>PETS BY USER {id} --- Or <Link to={'/add_pet'}><button>Add new pet</button></Link></h2>
                        { petsByUserQuery.isLoading ? <p>loading...</p> :
                            (!petsByUserQuery.data ? <p>No data</p> :
                                petsByUserQuery.data.data.map(p => <PetCard key={p.id} pet={p} />)
                            )
                        }
                    </div>
                )
            }


        </div>
    );
};