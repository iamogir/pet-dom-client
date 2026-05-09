import {useEffect, useState} from "react";
import {weatherCodes} from "features/weather/const";
import type {WeatherData} from "features/weather/types";
import type {Coordinates} from "features/weather/types/weather.types.ts";

interface Props {
    cityTemp: string
}

export const Weather = ({ cityTemp } : Props) => {

    console.log(cityTemp)

    const city = 'Haifa';

    const [weather, setWeather] = useState<WeatherData>({
        temperature: 0,
        icon: '',
        description: 'unknown weather',
        format: ''
    });
    const urlData = 'https://nominatim.openstreetmap.org/search?q=' + city + '&format=json&limit=1';

    const getCoordinates = async () => {
        const response = await fetch(urlData);
        const json: Coordinates[] = await response.json();
        return [json[0].lat, json[0].lon];
    }

    const getWeather = async () => {
        const data = await getCoordinates();

        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + data[0] + '&longitude=' + data[1] + '&current=temperature_2m,weather_code');
        const json = await response.json();

        console.log(json);

        return { temp: json.current.temperature_2m, state:  json.current.weather_code, format: json.current_units.temperature_2m };
    }

    useEffect(() => {
        console.log(weather);
        const fn2 = async () => {
            const res = await getWeather();
            console.log(res)

            setWeather({ temp: res.temp, state: weatherCodes[res.state].description, format: res.format, icon: weatherCodes[res.state].icon }); //delete warning
        }
        fn2();
    }, [])

    return (
        <>
            {weather.description.toLowerCase()} ({weather.temperature + weather.format + ' ' + weather.icon})
        </>
    );
};