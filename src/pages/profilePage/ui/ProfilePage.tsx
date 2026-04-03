import {useNavigate} from "react-router-dom";
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
    const navigate = useNavigate();

    return (
        <div>
            <section className={style.upper}>
                <h2>Welcome to your profile!</h2>
                <h3>Check pets, sent tasks to family members and keep pet health excellent!</h3>
            </section>
            {isLoading ? <p>Loading...</p> :
                (error ? <p>Oh, where is the data? Amiss! - {error.message}</p> :
                    <section className={style.cards}>
                        {data ? <UserCard key={data.id} user={data} /> : null }

                        <h2>PETS BY USER {data?.firstName} --- Want to
                            <button onClick={() => navigate('/add_pet')}>add new pet</button>
                            ?
                        </h2>
                        { petsByUserQuery.isLoading ? <p>loading...</p> :
                            (!petsByUserQuery.data ? <p>No data</p> :
                                petsByUserQuery.data.data.map(p => <PetCard key={p.id} pet={p} />)
                            )
                        }
                    </section>
                )
            }
        </div>
    );
};