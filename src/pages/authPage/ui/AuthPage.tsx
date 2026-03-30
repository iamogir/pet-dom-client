import {Link} from "react-router-dom";

export const AuthPage = () => {
    return (
        <div>
            Welcome, please, sign in to your account or <Link to={'/sign_up'}><span>sign up</span></Link>
            <div>

            </div>
        </div>
    );
};