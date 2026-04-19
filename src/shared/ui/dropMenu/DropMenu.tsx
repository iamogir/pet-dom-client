import style from './dropMenu.module.css'
import type {ChangeEvent} from "react";

interface Props {
    values: string[],
    func: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
}

export const DropMenu = ({ values, func }: Props) => {
    return (
        <div className={style.border}>
            {values.map(el => <input type={'text'} name={'gender'} onChange={func} value={el} placeholder={'gender'} />)}
        </div>
    );
};