import {Link} from "react-router-dom";
import {useAllPets} from "entities/pet";
import style from './homePage.module.css'
import {WelcomePart} from "pages/welcomePart";

export const HomePage = () => {

    const { data, error, isLoading, isFetching, } = useAllPets();

    return (
        isLoading ? <h1>Loading...</h1> :
            <div className={ style.box}>
                <WelcomePart/>
                <Link to='/pet_profile'>to pet pr</Link>
                <br/>
                <Link to='/user_profile'>to user</Link>
            </div>
    );
};