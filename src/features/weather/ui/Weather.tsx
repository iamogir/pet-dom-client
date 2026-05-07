import style from './weather.module.css'
import {useEffect, useState} from "react";

export const Weather = () => {

    const [weather, setWeather] = useState({temp: 0, state: 'unknown weather'});
    const url = 'https://api.weather.gov/points/40.7128,-74.0060';

    const fn = async () => {
        const response = await fetch(url);
        const json = await response.json();
        const forecastUrl = json.properties.forecast;
        const forecastRes = await fetch(forecastUrl);

        const forecastData = await forecastRes.json();
        const current = forecastData.properties.periods[0]

        return { temp: current.temperature, state: current.shortForecast };
    }

    useEffect(() => {
        console.log(weather);
        const fn2 = async () => {
            const res = await fn();
            console.log(res)
            setWeather(res);
        }
        fn2();
    }, [])

    return (
        <>
            {weather.state.toLowerCase()} ({weather.temp + 'F'})
        </>
    );
};