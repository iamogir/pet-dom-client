import type {Coordinates, CoordinatesResponse, WeatherMapped} from "features/weather/types";
import type {WeatherResponse} from "features/weather/types/weather.types.ts";

export const fromCoordinatesDto = (dto: CoordinatesResponse[]): Coordinates => {
    return {
        lat: dto[0].lat,
        lon: dto[0].lon
    };
}

export const fromWeatherDto = (dto: WeatherResponse): WeatherMapped => {
    return {
        temperature: dto.current.temperature_2m,
        description:  dto.current.weather_code,
        format: dto.current_units.temperature_2m }
}