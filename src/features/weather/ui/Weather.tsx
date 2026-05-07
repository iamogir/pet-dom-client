import style from './weather.module.css'
import {apiClient} from "shared/api";

export const Weather = () => {

    const url = 'https://api.weather.gov/points/40.7128,-74.0060';

    const fn = async () => {
        const response = await fetch(url);
        const json = await response.json();
        const forecastUrl = json.properties.forecast;
        const forecastRes = await fetch(forecastUrl);

        const forecastData = await forecastRes.json();

        console.log(forecastData.properties.periods[0]);

        return
    }

    fn();

    return (
        <div>
            weather
        </div>
    );
};