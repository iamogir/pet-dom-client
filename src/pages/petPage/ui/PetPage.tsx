import {Link} from "react-router-dom";
import {UserCard} from "entities/user/ui/userCard";
import {usePetById} from "entities/pet/hooks";
import {useAllUsersByPetId} from "entities/user/hooks";
import {Loader} from "shared/ui/loader";
import {EmptyState} from "features/emptyState/ui";
import {Button} from "shared/ui/button";
import {useGetAiAdvice} from "features/aiAdvice";
import style from './petPage.module.css'
import {PetCardProfile} from "entities/pet/ui/petCardProfile";

interface Props {
    petId: string
}

export const PetPage = ({ petId }: Props) => {

    const { isLoading, error, data } = useAllUsersByPetId(petId);
    const petData = usePetById(petId);
    const adviceAi = useGetAiAdvice();

    return (
        <>
            <div>
                {petData.isLoading ? <Loader/> :
                    petData.error ? <EmptyState variant={'pets'}/> :
                        petData.data ? <PetCardProfile pet={petData.data}/> :
                            <p>NOTHING TO SHOW</p>
                }
            </div>
            {isLoading ? <Loader/> :
                <div>
                    <h2>all users of selected pet:</h2>
                    { error ? <EmptyState variant={'users'}/> :
                            data?.data.map(u => <UserCard key={u.id} user={u} />)
                    }
                </div>
            }
            <Button onClick={() => adviceAi.mutate(petId)} text={'Get AI health advice'} />
            <span>(...</span>
            {adviceAi.isPending && <Loader/>}
            {adviceAi.data && <section>{adviceAi.data.advice}</section>}
            <span>...)</span>

            <Link to='/home'><button>to home</button></Link>
        </>
    );
};