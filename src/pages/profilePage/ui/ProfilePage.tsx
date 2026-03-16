import {Link} from "react-router-dom";
import {useAllUsers} from "entities/user/hooks";

export const ProfilePage = () => {

    const { isLoading, data, error } = useAllUsers();

    return (
        <div>
            {isLoading ? <p>Loading...</p> :
                (error ? <p>{error.message}</p> :
                    <div>
                        {data?.data.map(u => <UserCard key={u.id} user={u} />)}
                    </div>
                )
            }


            <Link to='/home'>to home</Link>
        </div>
    );
};