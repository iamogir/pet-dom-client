import style from './layout.module.css'
import {Header} from "widgets/header";
import {Footer} from "widgets/footer";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={style.layout}>
            layout
            {/*sidebar*/}
            <header><Header/></header>
            <main><Outlet/></main>
            {/*bottom nav*/}
            <footer><Footer/></footer>
        </div>
    );
};