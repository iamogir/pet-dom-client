import {useParams} from "react-router-dom";
import {ProfilePage} from "pages/profilePage";

export const ProfilePageFromRoute = () => {

    const currentUserId = '00';
    const { id } = useParams();

    if (!id) return <p>NO DATA ...</p>
        else if (id === 'me') return <ProfilePage id={currentUserId}/>

    return (
        <ProfilePage id={id}/>
    );
};