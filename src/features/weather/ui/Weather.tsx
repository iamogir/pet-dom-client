import style from './weather.module.css'
import {useEffect, useState} from "react";

export const Weather = () => {

    const city = 'Haifa';
    const weatherCodes = {
        0:  { icon: "☀️",  description: "Clear sky" },

        1:  { icon: "🌤️", description: "Mainly clear" },
        2:  { icon: "⛅",  description: "Partly cloudy" },
        3:  { icon: "☁️",  description: "Overcast" },

        45: { icon: "🌫️", description: "Fog" },
        48: { icon: "🌫️", description: "Depositing rime fog" },

        51: { icon: "🌦️", description: "Light drizzle" },
        53: { icon: "🌦️", description: "Moderate drizzle" },
        55: { icon: "🌧️", description: "Dense drizzle" },

        56: { icon: "🌧️🧊", description: "Light freezing drizzle" },
        57: { icon: "🌧️🧊", description: "Dense freezing drizzle" },

        61: { icon: "🌦️", description: "Slight rain" },
        63: { icon: "🌧️", description: "Moderate rain" },
        65: { icon: "🌧️", description: "Heavy rain" },

        66: { icon: "🌧️🧊", description: "Light freezing rain" },
        67: { icon: "🌧️🧊", description: "Heavy freezing rain" },

        71: { icon: "🌨️", description: "Slight snow fall" },
        73: { icon: "❄️",  description: "Moderate snow fall" },
        75: { icon: "❄️❄️", description: "Heavy snow fall" },

        77: { icon: "🌨️", description: "Snow grains" },

        80: { icon: "🌦️", description: "Slight rain showers" },
        81: { icon: "🌧️", description: "Moderate rain showers" },
        82: { icon: "🌧️⛈️", description: "Violent rain showers" },

        85: { icon: "🌨️", description: "Slight snow showers" },
        86: { icon: "❄️", description: "Heavy snow showers" },

        95: { icon: "⛈️", description: "Thunderstorm" },

        96: { icon: "⛈️🧊", description: "Thunderstorm with slight hail" },
        99: { icon: "⛈️🧊", description: "Thunderstorm with heavy hail" }
    };

    const [weather, setWeather] = useState({temp: 0, icon: '', state: 'unknown weather', format: ''});
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

        return { temp: json.current.temperature_2m, state:  json.current.weather_code, format: json.current_units.temperature_2m };
    }

    useEffect(() => {
        console.log(weather);
        const fn2 = async () => {
            const res = await fn();
            console.log(res)

            setWeather({ temp: res.temp, state: weatherCodes[res.state].description, format: res.format, icon: weatherCodes[res.state].icon });
        }
        fn2();
    }, [])

    return (
        <>
            {weather.state.toLowerCase()} ({weather.temp + weather.format + ' ' + weather.icon})
        </>
    );
};