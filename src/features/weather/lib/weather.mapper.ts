import type {Coordinates, CoordinatesResponse} from "features/weather/types";

export const fromCoordinatesDto = (dto: CoordinatesResponse[]): Coordinates => {
    return {
        lat: dto[0].lat,
        lon: dto[0].lon
    };
}