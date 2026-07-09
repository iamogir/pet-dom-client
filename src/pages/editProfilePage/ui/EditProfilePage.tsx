import {UserForm} from "entities/user/ui/userForm";
import {useParams} from "react-router-dom";
import {useUserById} from "entities/user/hooks";
import style from './editProfilePage.module.css';

export const EditProfilePage = () => {

    const { id } = useParams();
    const { data } = useUserById(id ?? '');

    return (
        <div className={style.container}>
            <h1> Make changes if you want:</h1>
            {data && <UserForm user={data}/>}
        </div>
    );
};