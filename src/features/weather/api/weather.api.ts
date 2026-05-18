import type {Coordinates, CoordinatesResponse} from "features/weather/types";

export const getCoordinates = async (city: string):Promise<Coordinates> => {
    const response = await fetch('https://nominatim.openstreetmap.org/search?q=' + (city ?? 'Israel')  + '&format=json&limit=1');
    const json: CoordinatesResponse[] = await response.json();

    return { lat: json[0].lat, lon: json[0].lon };
}