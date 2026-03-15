import {Link} from "react-router-dom";
import style from './homePage.module.css'
import {WelcomePart} from "shared/ui/welcomePart";
import {PetCard} from "entities/pet/ui/petCard";
import {useAllPets} from "entities/pet/hooks";

export const HomePage = () => {

    const { data, error, isLoading } = useAllPets();

    return (
        isLoading ? <h1>Loading...</h1> :
            (error ? <h1>Error... {error.message}</h1> :
                <div className={ style.box}>
                    <WelcomePart/>

                    <h3>Please, check your pets and their comfort:</h3>
                    {data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}

                    <Link to='/pet_profile'>to pet pr</Link>
                    <br/>
                    <Link to='/user_profile'>to user</Link>
                </div>
            )
    );
};