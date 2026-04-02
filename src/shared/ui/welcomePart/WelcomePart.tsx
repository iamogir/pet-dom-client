import style from './welcomePart.module.css'

export const WelcomePart = () => {

    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const time = date.getHours()

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

    return (
        // <div className={style.box}>
            <h1 className={style.weather}>{hello}, my darling! Today {today}/{month}/{year} and outside is so
            (weather)</h1>
        // </div>
    );
};