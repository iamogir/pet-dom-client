import {Link} from "react-router-dom";
import {useAllUsers, useUserById} from "entities/user/hooks";
import {UserCard} from "entities/user/ui/userCard";
import {usePetById} from "entities/pet/hooks";
import {PetCard} from "entities/pet/ui/petCard";
import {useAllPetsByOwnerId} from "entities/petOwner/hooks";

export const ProfilePage = () => {

    const userTemp = '01;'

    const { isLoading, data, error } = useAllUsers();
    const userQuery = useUserById('20');
    const petQuery = usePetById('0');
    const petsByUserQuery = useAllPetsByOwnerId(userTemp);

    return (
        <div>
            {isLoading ? <p>Loading...</p> :
                (error ? <p>{error.message}</p> :
                    <div>
                        {data?.data.map(u => <UserCard key={u.id} user={u} />)}

                        <h2>Selected profile</h2>
                        {userQuery.isLoading ? <p>second...</p> :
                            (!userQuery.data ? <p>Here are not users like this</p> :
                                <UserCard user={userQuery.data} />
                            )
                        }
                        { petQuery.isLoading ? <p>loading...</p> :
                            (!petQuery.data ? <p>No data</p> :
                                    <PetCard pet={petQuery.data} />
                            )
                        }
                        <br/>
                        <br/>
                        <h2>PETS BY USER {userTemp}</h2>
                        { petsByUserQuery.isLoading ? <p>loading...</p> :
                            (!petsByUserQuery.data ? <p>No data</p> :
                                petsByUserQuery.data.data.map(p => <PetCard key={p.id} pet={p} />)
                            )
                        }
                    </div>
                )
            }

            <button><Link to='/home'>to home</Link></button>
        </div>
    );
};