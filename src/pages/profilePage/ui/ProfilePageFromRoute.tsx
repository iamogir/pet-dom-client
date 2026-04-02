import {useParams} from "react-router-dom";
import {ProfilePage} from "pages/profilePage";
import {useMe} from "features/auth/hooks";

export const ProfilePageFromRoute = () => {

    const { data } = useMe();
    const { id } = useParams();

    if (!id || id === 'me') return (data ? <ProfilePage id={data?.id}/> : <p>No data</p>);

    return (
        <ProfilePage id={id}/>
    );
};