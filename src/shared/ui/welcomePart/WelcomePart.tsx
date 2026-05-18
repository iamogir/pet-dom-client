import style from './welcomePart.module.css'
import {Weather} from "features/weather/ui";
import {useMe} from "features/auth/hooks";

export const WelcomePart = () => {

    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const time = date.getHours()

    const { data, isLoading } = useMe();

    let hello: string; //TODO: put in the store! Redux !!!

    if (time > 6 && time <= 12) {
        hello = 'Good morning'
    } else if (time > 12 && time <= 18) {
        hello = 'Good afternoon';
    } else if (time > 18 && time <= 23) {
        hello = 'Good evening'
    } else {
        hello = 'Good night';
    }

    if (isLoading) {
        return (<h1>LOADING...</h1>)
    }

    return (
        // <div className={style.box}>
            <h1 className={style.weather}>
                {hello}, my darling! Today {today}/{month}/{year} and <br/> outside is so
                <span style={{ color: 'red' }}> <Weather
                    city={data?.city ?? data?.country ?? 'Israel'
                }/></span> now
            </h1>
        // </div>
    );
};