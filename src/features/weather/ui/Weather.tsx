import style from './weather.module.css'
import {apiClient} from "shared/api";
import {useEffect, useState} from "react";

export const Weather = () => {

    const [word, setWord] = useState('unknown weather');
    const url = 'https://api.weather.gov/points/40.7128,-74.0060';

    const fn = async () => {
        const response = await fetch(url);
        const json = await response.json();
        const forecastUrl = json.properties.forecast;
        const forecastRes = await fetch(forecastUrl);

        const forecastData = await forecastRes.json();

        return forecastData.properties.periods[0].shortForecast;
    }

    useEffect(() => {
        console.log(word)
        const fn2 = async () => {
            const res = await fn();
            console.log(res)
            setWord(res);
        }
        fn2();
    })

    return (
        <>
            {word.toLowerCase()}
        </>
    );
};