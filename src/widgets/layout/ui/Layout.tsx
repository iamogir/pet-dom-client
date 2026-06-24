import style from './layout.module.css'
import {Header} from "widgets/header";
import {Footer} from "widgets/footer";
import {Outlet} from "react-router-dom";
import {Sidebar} from "widgets/sidebar";
import {BottomMenu} from "widgets/bottomMenu";

export const Layout = () => {

    // const location = useLocation();
    // const navigate = useNavigate();
    //
    // const state = location.state as {
    //     backgroundLocation?: Location;
    // };
    // const isModalRoute = !!state?.backgroundLocation;
    // const closeModal = () => {
    //     navigate(-1);
    // };

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

            {/*{isModalRoute && (*/}
            {/*    <Modal onClose={closeModal}>*/}
            {/*        <AddNewPetPage/>*/}
            {/*    </Modal>*/}
            {/*)}*/}
        </>
    );
};