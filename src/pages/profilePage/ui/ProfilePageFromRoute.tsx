import {useParams} from "react-router-dom";
import {ProfilePage} from "pages/profilePage";
import {useMe} from "features/auth/hooks";

export const ProfilePageFromRoute = () => {

    const { data } = useMe();
    const { id } = useParams();

    if (!id || id === 'me') return <ProfilePage id={data?.id}/>

    return (
        <ProfilePage id={id}/>
    );
};