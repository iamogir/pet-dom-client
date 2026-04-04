import type {IUser} from "entities/user/model";
import style from './userCard.module.css'
import {Link, useNavigate} from "react-router-dom";

interface Props {
    user: IUser
}

export const UserCard = ( { user }: Props ) => {

    const age = new Date().getFullYear() - user.birthDate.getFullYear();
    const navigate = useNavigate();

    return (

        <article className={style.box}>
            <Link to={'/user/' + user.id}>
                <ul>
                    <li>{user.country}</li>
                    <li>{user.gender}</li>
                    <li>{user.phoneNumber}</li>
                    <li>age: {age}</li>
                </ul>
            </Link>

            <section>
                <h3>{user.firstName} {user.lastName}</h3>
                <p>{user.email}</p>
                <div className={style.boxImage}>
                    <img src={user.avatarUrl} alt={user.firstName + ' photocard'}/>
                    <button onClick={() => navigate('/edit_user/' + user.id)}>edit profile</button>
                </div>
            </section>

        </article>



    );
};