import style from './layout.module.css'
import {Header} from "widgets/header";
import {Footer} from "widgets/footer";
import {Outlet} from "react-router-dom";
import {Sidebar} from "widgets/sidebar";
import {Navigation} from "widgets/navigation";

export const Layout = () => {
    return (
        <>
            <nav aria-label="Sidebar navigation">
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

            <nav aria-label="Mobile navigation" className={style.hide}>
                <Navigation/>
            </nav>
        </>
    );
};