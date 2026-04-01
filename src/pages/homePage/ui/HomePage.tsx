import {Link} from "react-router-dom";
import style from './homePage.module.css'
import {WelcomePart} from "shared/ui/welcomePart";
import {PetCard} from "entities/pet/ui/petCard";
import {useAuth} from "features/auth/context";
import {useMyPets} from "entities/pet/hooks";

export const HomePage = () => {

    const {data, isLoading, error} = useMyPets();
    const {logout} = useAuth();

    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <button onClick={handleLogout}>Sign o u t</button>
            <Link to={'/user/'}><button>My profile</button></Link>
            <WelcomePart/>
            <h3>Please, check your pets and their comfort:</h3>
            <br/>
            {isLoading ? <p> One second, checking pets...</p> :
                error ? <p>Oh, something goes wrong: {error.message}</p> :
                    <div className={style.petCards}>
                        {data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                    </div>
            }
        </div>
    );
};