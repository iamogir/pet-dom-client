import {Link} from "react-router-dom";
import {useAllUsers, useUserById} from "entities/user/hooks";
import {UserCard} from "entities/user/ui/userCard";

export const ProfilePage = () => {

    const { isLoading, data, error } = useAllUsers();
    const userQuery = useUserById('20');

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
                    </div>
                )
            }

            <Link to='/home'>to home</Link>
        </div>
    );
};