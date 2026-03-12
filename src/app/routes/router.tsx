import {createBrowserRouter, Navigate} from "react-router-dom";
import {HomePage} from "pages/homePage";
import {ErrorPage} from "pages/errorPage";
import {AuthPage} from "pages/authPage";
import {RegistPage} from "pages/registPage";
import {ProfilePage} from "pages/profilePage";
import {PetPage} from "pages/petPage";
import {Layout} from "widgets/layout";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: 'home',
                element: <HomePage/>,
            },
            {
                path: '/',
                element: <Navigate to='home' replace />,
            },
            {
                path: 'user_profile',
                element: <ProfilePage/>,
            },
            {
                path: 'pet_profile',
                element: <PetPage/>,
            }
        ],
        errorElement: <ErrorPage/>
    },
    {
        path: 'sign_in',
        element: <AuthPage/>,
    },
    {
        path: 'sign_up',
        element: <RegistPage/>,
    }
])