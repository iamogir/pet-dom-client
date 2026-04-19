import style from './dropMenu.module.css'
import type {ChangeEvent} from "react";

interface Props {
    values: string[],
    func: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
}

export const DropMenu = ({ values, func }: Props) => {

    const selectValueHandler = (event) => {
        const input = event.target.parentElement.previousElementSibling;
        input.value = event.target.key
        console.log(input)
    }

    return (
        <div className={style.border}>
            {values.map(el => <div key={el} value={el} onClick={func}>{el}</div>)}
        </div>
    );
};