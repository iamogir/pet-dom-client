import {usePetById} from "entities/pet/hooks";
import {useAllUsersByPetId} from "entities/user/hooks";
import {Loader} from "shared/ui/loader";
import {EmptyState} from "features/emptyState/ui";
import {Button} from "shared/ui/button";
import {useGetAiAdvice} from "features/aiAdvice";
import style from './petPage.module.css'
import {PetCardProfile} from "entities/pet/ui/petCardProfile";
import {UserSmallCard} from "entities/user/ui/userSmallCard";

interface Props {
    petId: string
}

export const PetPage = ({ petId }: Props) => {

    const { isLoading, error, data } = useAllUsersByPetId(petId);
    const petData = usePetById(petId);
    const adviceAi = useGetAiAdvice();

    //todo profile card next
    //generate card
    //do card

    return (
        <>
            <div className={style.container}>
                {petData.isLoading ? <Loader/> :
                    petData.error ? <EmptyState variant={'pets'}/> :
                        petData.data ? <PetCardProfile pet={petData.data}/> :
                            <p>NOTHING TO SHOW</p>
                }
                <div className={style.infoCards}>
                    <div className={style.vaccine}>
                        <p>Next vaccination</p>
                        <p>... Rabies ...</p>
                        <p>
                            <span>few days</span>
                            <span> • </span>
                            <span>when</span>
                        </p>
                    </div>

                    {isLoading ? <Loader/> :
                        <div className={style.box}>
                            <p>Primary Caretakers</p>
                            {error ? <EmptyState variant={'users'}/> :
                                data?.data.map(u => <UserSmallCard key={u.id} user={u}/>)
                            }
                        </div>
                    }</div>
            </div>

            <div className={style.container}>
                <div style={{height: '400px', width: '80%', backgroundColor: 'white', padding: '10px', marginBottom: '10px'}}>
                    Weight diagram
                </div>
                <article className={style.aiCard}>
                    <Button onClick={() => adviceAi.mutate(petId)} text={'Get AI health advice'}/>
                    {adviceAi.isPending && <Loader/>}
                    {adviceAi.data && <p>{adviceAi.data.advice}</p>}
                </article>
            </div>
        </>
    );
};