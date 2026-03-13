import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            <Link to='/pet_profile'>to pet pr</Link>
            <br/>
            <Link to='/user_profile'>to user</Link>
        </div>
    );
};