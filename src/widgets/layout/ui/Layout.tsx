import style from './layout.module.css'
import {Header} from "widgets/header";
import {Footer} from "widgets/footer";
import {Outlet} from "react-router-dom";
import {Sidebar} from "widgets/sidebar";
import {Navigation} from "widgets/navigation";

export const Layout = () => {
    return (
        <div className={style.layout}>
            layout
            <div>
                <Sidebar/>
            </div>

            <header><Header/></header>
            <main><Outlet/></main>
            <footer><Footer/></footer>

            <div className={style.hide}>
                <Navigation/>
            </div>
        </div>
    );
};