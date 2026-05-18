import type {Coordinates, CoordinatesResponse, WeatherMapped} from "features/weather/types";
import type {WeatherResponse} from "features/weather/types/weather.types.ts";
import {fromCoordinatesDto} from "features/weather/lib";

export const getCoordinates = async (city: string):Promise<Coordinates> => {
    const response = await fetch('https://nominatim.openstreetmap.org/search?q=' + (city ?? 'Israel')  + '&format=json&limit=1');
    const json: CoordinatesResponse[] = await response.json();

    return fromCoordinatesDto(json);
}

export const getWeather = async (coordinates: Coordinates): Promise<WeatherMapped> => {

    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + coordinates.lat + '&longitude=' + coordinates.lon + '&current=temperature_2m,weather_code');
    const json: WeatherResponse = await response.json();

    return { temperature: json.current.temperature_2m, description:  json.current.weather_code, format: json.current_units.temperature_2m };

}