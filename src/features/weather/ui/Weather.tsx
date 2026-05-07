import style from './weather.module.css'
import {useEffect, useState} from "react";

export const Weather = () => {

    const city = 'New+York';

    const [weather, setWeather] = useState({temp: '0', state: 'unknown weather'});
    const url = 'https://api.weather.gov/points/';
    const urlData = 'https://nominatim.openstreetmap.org/search?q=' + city + '&format=json&limit=1';
    console.log(urlData);

    const fn3 = async () => {
        const resp = await fetch(urlData);
        const json = await resp.json();
        return [json[0].lat, json[0].lon];
    }

    const fn = async () => {
        const data = await fn3();

        const response = await fetch(url + data[0] + ',' + data[1]);
        const json = await response.json();
        const forecastUrl = json.properties.forecast;
        const forecastRes = await fetch(forecastUrl);

        const forecastData = await forecastRes.json();
        const current = forecastData.properties.periods[0]

        return { temp: current.temperature, state: current.shortForecast };
    }

    const tempToC = (f) => {
        // (32 °F − 32) × 5/9 = 0 °C
        return (f - 32) * 5/9;

    }

    useEffect(() => {
        console.log(weather);
        const fn2 = async () => {
            const res = await fn();
            console.log(res)

            setWeather({ temp: tempToC(res.temp).toFixed(), state: res.state.toLowerCase() });
        }
        fn2();
    }, [])

    return (
        <>
            {weather.state} ({weather.temp + ' C'})
        </>
    );
};