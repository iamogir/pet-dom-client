import {UserForm} from "entities/user/ui/userForm";
import {useParams} from "react-router-dom";
import {useUserById} from "entities/user/hooks";

export const EditProfilePage = () => {

    const { id } = useParams();
    const { data } = useUserById(id ?? '');

    return (
        <div>
            <h1> Make changes if you want:</h1>
            <br/>
            {data && <UserForm user={data}/>}
        </div>
    );
};