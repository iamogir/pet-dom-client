import {useQuery} from "@tanstack/react-query";
import {getCoordinates, getWeather} from "features/weather/api";
import type {Coordinates} from "features/weather/types";

export const useGetWeather = (city: string) => {
    return useQuery({
        queryKey: ['weather', city],
        queryFn: async () => {
            const coordinates: Coordinates = await getCoordinates(city);
            return getWeather(coordinates);
        },
    })
}