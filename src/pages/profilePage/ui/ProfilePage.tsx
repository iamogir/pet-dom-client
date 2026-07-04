import {useNavigate} from "react-router-dom";
import {useUserById} from "entities/user/hooks";
import {UserCard} from "entities/user/ui/userCard";
import {PetCard} from "entities/pet/ui/petCard";
import style from './profilePage.module.css'
import {useAllPetsByUserId, useDeletePetById} from "entities/pet/hooks";
import {Loader} from "shared/ui/loader";
import {ErrorState} from "shared/ui/errorState";
import {EmptyState} from "features/emptyState/ui";

interface Props {
    id: string
}

export const ProfilePage = ({ id }: Props) => {

    const { isLoading, data, error } = useUserById(id);
    const petsByUserQuery = useAllPetsByUserId(id);
    const navigate = useNavigate();
    const deletePet = useDeletePetById();

    return (
        <>
            <h1>Welcome to your profile!</h1>
            <h2>Check pets, sent tasks to family members and keep pet health excellent!</h2>
            <article className={style.box}>
                <section className={style.data}>
                    <p>{data?.firstName} {data?.lastName}</p>
                    <p>OWNER</p>
                </section>
                <section className={style.info}>

                </section>

            </article>
            {isLoading ? <Loader/> :
                (error ? <ErrorState/> :
                    <section className={style.cards}>
                        {data ? <UserCard key={data.id} user={data} /> : null }

                        <div className={style.block}>
                            <h3>Your pets, {data?.firstName}, be careful...</h3>
                            <p>Not enough? Want to
                                <button onClick={() => navigate('/add_pet')}>add new pet</button>
                                ?
                            </p>
                        </div>
                        { petsByUserQuery.isLoading ? <Loader/> :
                            (!petsByUserQuery.data ? <EmptyState variant={"pets"}/> :
                                    petsByUserQuery.data.data.map(p => <div> <PetCard key={p.id} pet={p} /><button onClick={() => deletePet.mutate(p.id)}>delete</button></div>)
                            )
                        }
                    </section>
                )
            }
        </>
    );
};