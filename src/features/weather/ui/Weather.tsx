import style from './weather.module.css'
import {useEffect, useState} from "react";

export const Weather = () => {

    const city = 'New+York';

    const [weather, setWeather] = useState({temp: 0, state: 'unknown weather'});
    const urlData = 'https://nominatim.openstreetmap.org/search?q=' + city + '&format=json&limit=1';

    const fn3 = async () => {
        const resp = await fetch(urlData);
        const json = await resp.json();
        return [json[0].lat, json[0].lon];
    }

    const fn = async () => {
        const data = await fn3();

        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + data[0] + '&longitude=' + data[1] + '&current=temperature_2m,weather_code');
        const json = await response.json();

        console.log(json);

        return { temp: json.current.temperature_2m, state:  json.current_units.temperature_2m };
    }

    useEffect(() => {
        console.log(weather);
        const fn2 = async () => {
            const res = await fn();
            console.log(res)

            setWeather({ temp: res.temp, state: res.state });
        }
        fn2();
    }, [])

    return (
        <>
            {weather.state} ({weather.temp + weather.state})
        </>
    );
};