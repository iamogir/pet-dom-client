import {createBrowserRouter, Navigate} from "react-router-dom";
import {HomePage} from "pages/homePage";
import {ErrorPage} from "pages/errorPage";
import {AuthPage} from "pages/authPage";
import {RegistPage} from "pages/registPage";
import {PetPageFromRoute} from "pages/petPage";
import {Layout} from "widgets/layout";
import {ProfilePageFromRoute} from "pages/profilePage";
import {PetListPage} from "pages/petListPage";
import {AddNewPetPage} from "pages/addNewPetPage";

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
                path: 'user/:id',
                element: <ProfilePageFromRoute/>,
            },
            {
                path: 'user',
                element: <Navigate to={'/user/me'} replace/>,
            },
            {
                path: 'pet/:id',
                element: <PetPageFromRoute/>,
            },
            {
                path: 'my_pets',
                element: <PetListPage/>,
            },
            {
                path: 'pet',
                element: <Navigate to={'/my_pets'}/>,
            },
            {
                path: 'add_pet',
                element: <AddNewPetPage/>
            }
            // temp!
            ,
            {
                path: 'all_app_pets',
                element: <PetListPage/>
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