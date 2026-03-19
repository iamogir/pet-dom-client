import type {IUser} from "entities/user/model";
import style from './userCard.module.css'
import {Link} from "react-router-dom";

interface Props {
    user: IUser
}

export const UserCard = ( { user }: Props ) => {

    const age = new Date().getFullYear() - user.birthDate.getFullYear();

    return (
        <Link to={'/user/' + user.id}>
        <div className={style.box}>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.country}</p>
            <p>{user.email}</p>
            <p>{user.gender}</p>
            <p>{user.password}</p>
            <p>{user.phoneNumber}</p>
            <p>age: {age}</p>
            <div className={style.boxImage}>
                <img src={user.avatarUrl} alt={user.firstName + ' photocard'} />
            </div>
        </div>
        </Link>
    );
};