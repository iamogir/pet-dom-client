import style from './layout.module.css'
import {Header} from "widgets/header";
import {Footer} from "widgets/footer";
import {Outlet, Route, Routes, useLocation} from "react-router-dom";
import {Sidebar} from "widgets/sidebar";
import {BottomMenu} from "widgets/bottomMenu";
import {AddNewPetPage} from "pages/addNewPetPage";

export const Layout = () => {

    const location = useLocation();

    const state = location.state as {
        backgroundLocation?: Location;
    };

    const isModalRoute = !!state?.backgroundLocation;

    return (
        <>
            <nav aria-label="Sidebar navigation" style={{ display: 'none'}}>
                <Sidebar/>
            </nav>

            <div className={style.layout}>
                <header>
                    <Header/>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>

            <BottomMenu/>
            {isModalRoute && (
                <Routes>
                    <Route
                        path="add_pet"
                        element={<AddNewPetPage />}
                    />
                </Routes>
            )}
        </>
    );
};