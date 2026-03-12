import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "pages/homePage";
import {ErrorPage} from "pages/errorPage";
import {AuthPage} from "pages/authPage";
import {RegistPage} from "pages/registPage";
import {ProfilePage} from "pages/profilePage";
import {PetPage} from "pages/petPage";

export const router = createBrowserRouter([
    {
        path: '*',
        element: <HomePage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/sign_in',
        element: <AuthPage/>,
    },
    {
        path: '/sign_up',
        element: <RegistPage/>,
    },
    {
        path: '/user_profile',
        element: <ProfilePage/>,
    },
    {
        path: 'pet_profile',
        element: <PetPage/>,
    }
])