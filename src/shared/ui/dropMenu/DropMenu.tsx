import style from './dropMenu.module.css'
import {useRef, useState} from "react";

interface Props {
    values: string[],
    onSelect: (value: string) => void,
    value: string
    name: string
}

export const DropMenu = ({ values, onSelect, value, name }: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const showBlock = () => setIsOpen(prev => !prev);

    return (
        <div ref={ref} >
            <label htmlFor={name}>{name}: </label>
            <input type={'text'} readOnly={true} value={value} name={name} onClick={showBlock} />

            {isOpen && (
                <div className={style.border}>
                    {values.map(el => <div key={el} onClick={() => onSelect(el)}>{el}</div>)}
                </div>
            )}
        </div>
    );
};