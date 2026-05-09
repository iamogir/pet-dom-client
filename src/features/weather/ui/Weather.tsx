import {useEffect, useState} from "react";
import {weatherCodes} from "features/weather/const";
import type {WeatherData, WeatherResponse} from "features/weather/types";
import type {Coordinates} from "features/weather/types/weather.types.ts";

interface Props {
    city: string
}

export const Weather = ({ city } : Props) => {

    const [weather, setWeather] = useState<WeatherData>({
        temperature: 0,
        icon: '',
        description: 'unknown weather',
        format: ''
    });
    const urlCoordinates = 'https://nominatim.openstreetmap.org/search?q=' + city + '&format=json&limit=1';

    const getCoordinates = async () => {
        const response = await fetch(urlCoordinates);
        const json = await response.json();

        return { lat: json[0].lat, lon: json[0].lon };
    }

    const getWeather = async () => {
        const data: Coordinates = await getCoordinates();

        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + data.lat + '&longitude=' + data.lon + '&current=temperature_2m,weather_code');
        const json = await response.json();

        console.log(json);

        return { temperature: json.current.temperature_2m, description:  json.current.weather_code, format: json.current_units.temperature_2m };
    }

    useEffect(() => {
        const updateWeather = async () => {
            const res: WeatherResponse = await getWeather();

            setWeather({
                temperature: res.temperature,
                description: weatherCodes[res.description].description,
                format: res.format,
                icon: weatherCodes[res.description].icon });
        }
        updateWeather();
    }, [])

    return (
        <>
            {weather.description.toLowerCase()} ({weather.temperature + weather.format + ' ' + weather.icon})
        </>
    );
};