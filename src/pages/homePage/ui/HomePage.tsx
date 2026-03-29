import {Link} from "react-router-dom";
import style from './homePage.module.css'
import {WelcomePart} from "shared/ui/welcomePart";
import {PetCard} from "entities/pet/ui/petCard";
import {useAllPetsByUserId} from "entities/petOwner/hooks";
import {useLogin} from "features/auth/hooks";

export const HomePage = () => {

    const tempUserId = '00';
    const { data, error, isLoading } = useAllPetsByUserId(tempUserId);
    const { mutateAsync } = useLogin();

    const handleLogin = async () => {
        const res = await mutateAsync({
            email: 'email',
            password: 'password',
        })

        console.log(res)
    }

    return (
        <div>
            <button onClick={handleLogin}>l o g i n</button>
            <WelcomePart/>
            <h3>Please, check your pets and their comfort:</h3>
            <br/>
            {isLoading ? <p> One second, checking pets...</p> :
                error ? <p>Oh, something goes wrong: {error.message}</p> :
                    <div className={style.petCards}>
                        {data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                    </div>
            }
            <h3>Or go to yor profile:</h3>
            <Link to={'/user/' + tempUserId}><button>to user</button></Link>
        </div>
    );
};