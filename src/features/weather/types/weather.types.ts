import {weatherCodes} from "features/weather/const";

export interface WeatherBase {
    icon: string;
    description: string;
}

export interface WeatherData extends WeatherBase {
    temperature: number;
    format: string;
}

export interface WeatherMapped extends Omit<WeatherData, 'description' | 'icon'> {
    description: WeatherCode;
}

export interface WeatherResponse {
    current: {
        temperature_2m: number;
        weather_code: WeatherCode;
    };
    current_units: {
        temperature_2m: string;
    }
}

export type WeatherCode = keyof typeof weatherCodes;
// make dynamic?
//     0 |
//     1 | 2 | 3 |
//     45 | 48 |
//     51 | 53 | 55 |
//     56 | 57 |
//     61 | 63 | 65 |
//     66 | 67 |
//     71 | 73 | 75 |
//     77 |
//     80 | 81 | 82 |
//     85 | 86 |
//     95 |
//     96 | 99;

export interface Coordinates {
    lat: string;
    lon: string
}

export interface CoordinatesResponse {
    lat: string;
    lon:string
}