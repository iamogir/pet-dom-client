import type {IUser} from "entities/user/model";
import {useNavigate} from "react-router-dom";
import style from './userSmallCard.module.css'

interface Props {
    user: IUser;
}
export const UserSmallCard = ({ user }: Props) => {

    const navigate = useNavigate();

    return (
        <article className={style.box} onClick={() => navigate(`/user/${user.id}`)}>
            <img src={user.avatarUrl ?? 'https://zornet.ru/_fr/19/4335033.png'} alt={user.firstName}/>
            <section>
                <p>{user.firstName} {user.lastName}</p>
                <p>user role</p>
            </section>
        </article>
    );
};