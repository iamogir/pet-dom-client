import {useNavigate} from "react-router-dom";
import {useUserById} from "entities/user/hooks";
import {PetCard} from "entities/pet/ui/petCard";
import style from './profilePage.module.css'
import {useAllPetsByUserId, useDeletePetById} from "entities/pet/hooks";
import {Loader} from "shared/ui/loader";
import {ErrorState} from "shared/ui/errorState";
import {EmptyState} from "features/emptyState/ui";
import {Button} from "shared/ui/button";

interface Props {
    id: string
}

export const ProfilePage = ({ id }: Props) => {

    const { isLoading, data, error } = useUserById(id);
    const petsByUserQuery = useAllPetsByUserId(id);
    const navigate = useNavigate();
    const deletePet = useDeletePetById();

    return (
        <div className={style.page}>
            <div className={style.head}>
                <h1>Welcome to your profile!</h1>
                <h3>Check pets, sent tasks to family members and keep pet health excellent!</h3>
            </div>
            <article className={style.box}>
                <p>{data?.firstName} {data?.lastName}</p>
                <div>
                    <Button onClick={() => navigate('/edit_user/' + data?.id)} text={'Edit'}/>
                </div>
                <section className={style.info}>
                    <div>
                        <p>Email address</p>
                        <p>{data?.email}</p>
                    </div>
                    <div>
                        <p>Phone number</p>
                        <p>{data?.phone}</p>
                    </div>
                    <div>
                        <p>Country</p>
                        <p>{data?.country}</p>
                    </div>
                    <div>
                        <p>Gender</p>
                        <p>{data?.gender}</p>
                    </div>
                </section>
            </article>

            {isLoading ? <Loader/> :
                (error ? <ErrorState/> :
                    <section>
                        <div className={style.block}>
                            <h3>Your pets are here!</h3>
                            <p>Not enough? Want to
                                <Button onClick={() => navigate('/add_pet')} text={'Add new pet'} />
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
        </div>
    );
};