import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            homePage
            <div><Link to={'/pet_profile'}>to pet pr</Link></div>
        </div>
    );
};