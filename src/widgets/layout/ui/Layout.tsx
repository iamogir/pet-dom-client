import style from './layout.module.css'
import {Header} from "widgets/header";
import {Footer} from "widgets/footer";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Sidebar} from "widgets/sidebar";
import {BottomMenu} from "widgets/bottomMenu";
import {AddNewPetPage} from "pages/addNewPetPage";
import {Modal} from "shared/ui/modal";

export const Layout = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as {
        backgroundLocation?: Location;
    };
    const isModalRoute = !!state?.backgroundLocation;
    const closeModal = () => {
        navigate(-1);
    };

    console.log('LOCATION STATE:', location.state);

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
                <Modal onClose={closeModal}>
                    <AddNewPetPage/>
                </Modal>
            )}
        </>
    );
};