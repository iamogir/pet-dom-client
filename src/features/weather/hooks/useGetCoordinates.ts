import {useQuery} from "@tanstack/react-query";
import {getCoordinates} from "features/weather/api";

export const useGetCoordinates = (city: string) => {
    return useQuery({
        queryKey: ['coordinates'],
        queryFn: () => getCoordinates(city),
    })
}