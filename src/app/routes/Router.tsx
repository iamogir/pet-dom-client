import {createBrowserRouter, Navigate} from "react-router-dom";
import {HomePage} from "pages/homePage";
import {ErrorPage} from "pages/errorPage";
import {AuthPage} from "pages/authPage";
import {RegisterPage} from "pages/registerPage";
import {PetPageFromRoute} from "pages/petPage";
import {Layout} from "widgets/layout";
import {ProfilePageFromRoute} from "pages/profilePage";
import {PetListPage} from "pages/petListPage";
import {AddNewPetPage} from "pages/addNewPetPage";
import {EditPetPage} from "pages/editPetPage";
import {EditProfilePage} from "pages/editProfilePage";
import {RequireAuth, RequireGuest} from "app/routes";

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
                element: <RequireAuth>
                            <ProfilePageFromRoute/>
                         </RequireAuth>,
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
                element: <RequireAuth>
                            <PetListPage/>
                        </RequireAuth>,
            },
            {
                path: 'pet',
                element: <Navigate to={'/my_pets'}/>,
            },
            {
                path: 'add_pet',
                element: <RequireAuth>
                            <AddNewPetPage/>
                         </RequireAuth>
            },
            {
                path: 'edit_pet/:id',
                element: <RequireAuth>
                            <EditPetPage/>
                         </RequireAuth>
            },
            {
                path: 'edit_user/:id',
                element: <RequireAuth>
                            <EditProfilePage/>
                         </RequireAuth>
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
        element: <RequireGuest>
                     <AuthPage/>
                 </RequireGuest>,
    },
    {
        path: 'sign_up',
        element: <RequireGuest>
                     <RegisterPage/>
                 </RequireGuest>,
    }
])