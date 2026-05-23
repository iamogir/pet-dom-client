import {weatherCodes} from "features/weather/const";
import {useGetWeather} from "features/weather/hooks";
import {Loader} from "shared/ui/loader";

interface Props {
    city: string
}

export const Weather = ({ city } : Props) => {

    const { data, isLoading} = useGetWeather(city);
    return (
        (isLoading || !data) ? <Loader/> :
        <span>
            {weatherCodes[data.description].description.toLowerCase()} ({data.temperature + data.format + ' ' + weatherCodes[data.description].icon})
        </span>
    );
};