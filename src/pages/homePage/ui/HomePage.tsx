import style from './homePage.module.css'
import {WelcomePart} from "shared/ui/welcomePart";
import {PetCard} from "entities/pet/ui/petCard";
import {useMyPets} from "entities/pet/hooks";

export const HomePage = () => {

    // const user = useMe();
    const {data, isLoading, error} = useMyPets();
    // const navigate = useNavigate();
    // const {logout} = useAuth();

    // const handleLogout = () => {
    //     logout()
    //     navigate("/sign_in");
    // }

    return (
        <>
            <WelcomePart/>
            <h2>Please, check your pets and their comfort:</h2>
            <br/>
            {isLoading ? <p> One second, checking pets...</p> :
                error ? <p>Oh, something goes wrong: {error.message}</p> :
                    <div className={style.petCards}>
                        {data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                    </div>
            }
        </>
    );
};