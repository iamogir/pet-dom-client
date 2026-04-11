import style from './homePage.module.css'
import {WelcomePart} from "shared/ui/welcomePart";
import {PetCard} from "entities/pet/ui/petCard";
import {useMyPets} from "entities/pet/hooks";

export const HomePage = () => {

    const {data, isLoading, error} = useMyPets();
    // const temp = useAllPetsByUserId("292060dd-24dd-48e5-b2be-be1d6f2855cd");

    return (
        <>
            {/*{ temp.data?.data.map((el) => <PetCard key={el.id} pet={el}/>)}*/}
            <h1 style={{ color: 'red' }}>. . . news block . . .</h1>
            <WelcomePart/>
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