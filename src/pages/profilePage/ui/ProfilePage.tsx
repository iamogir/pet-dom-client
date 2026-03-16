import {Link} from "react-router-dom";
import {useAllUsers, useUserById} from "entities/user/hooks";
import {UserCard} from "entities/user/ui/userCard";
import type {IUser} from "entities/user/model";

export const ProfilePage = () => {

    const { isLoading, data, error } = useAllUsers();
    let data2 = useUserById('20');
    const data3: IUser = data2.data as IUser;

    return (
        <div>
            {isLoading ? <p>Loading...</p> :
                (error ? <p>{error.message}</p> :
                    <div>
                        {data?.data.map(u => <UserCard key={u.id} user={u} />)}

                        <h2>Selected profile</h2>
                        <UserCard user={data3} />
                    </div>
                )
            }

            <Link to='/home'>to home</Link>
        </div>
    );
};