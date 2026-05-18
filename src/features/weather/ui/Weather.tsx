import {weatherCodes} from "features/weather/const";
import {useGetWeather} from "features/weather/hooks";

interface Props {
    city: string
}

export const Weather = ({ city } : Props) => {

    const { data, isLoading} = useGetWeather(city);
    return (
        (isLoading || !data) ? <p>L O A D I N G</p> :
        <span>
            {weatherCodes[data.description].description.toLowerCase()} ({data.temperature + data.format + ' ' + weatherCodes[data.description].icon})
        </span>
    );
};