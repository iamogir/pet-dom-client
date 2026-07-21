import {ErrorState} from "shared/ui/errorState";
import {Link} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <main>
            <ErrorState
                title="Page not found"
                message="The page does not exist or something went wrong."
            />
            <Link to="/">Go home</Link>
        </main>
    );
};