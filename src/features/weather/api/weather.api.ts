import type {Coordinates, CoordinatesResponse, WeatherMapped} from "features/weather/types";
import type {WeatherResponse} from "features/weather/types/weather.types.ts";
import {fromCoordinatesDto, fromWeatherDto} from "features/weather/lib";

export const getCoordinates = async (city: string):Promise<Coordinates> => {
    const response = await fetch('https://nominatim.openstreetmap.org/search?q=' + (city ?? 'Israel')  + '&format=json&limit=1');
    const json: CoordinatesResponse[] = await response.json();

    return fromCoordinatesDto(json);
}

export const getWeather = async (coordinates: Coordinates): Promise<WeatherMapped> => {

    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + coordinates.lat + '&longitude=' + coordinates.lon + '&current=temperature_2m,weather_code');
    const json: WeatherResponse = await response.json();

    return fromWeatherDto(json);

}