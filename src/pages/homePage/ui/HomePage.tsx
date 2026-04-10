import style from './homePage.module.css'
import {WelcomePart} from "shared/ui/welcomePart";
import {PetCard} from "entities/pet/ui/petCard";
import {useMyPets} from "entities/pet/hooks";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {

    // const user = useMe();
    const {data, isLoading, error} = useMyPets();
    // const navigate = useNavigate();
    // const {logout} = useAuth();

    // const handleLogout = () => {
    //     logout()
    //     navigate("/sign_in");
    // }

    const navigate = useNavigate();

    return (
        <>
            <h1 style={{ color: 'red' }}>. . . news block . . .</h1>
            <WelcomePart/>
            <button onClick={() => navigate('/add_pet')}>s</button>
            <h2>Please, check your pets and their comfort:</h2>
            {isLoading ? <p> One second, checking pets...</p> :
                error ? <p>Oh, something goes wrong: {error.message}</p> :
                    <section className={style.petCards}>
                        {data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                    </section>
            }
            <h1 style={{ color: 'red' }}>. . . ask ai . . .</h1>
        </>
    );
};