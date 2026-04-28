import style from './dropMenu.module.css'
import {useEffect, useRef, useState} from "react";

interface Props {
    values: readonly string[],
    onSelect: (value: string) => void,
    value: string
    name: string
}

export const DropMenu = ({ values, onSelect, value, name }: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleShowBlock = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!ref.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    })

    return (
        <div ref={ref} >
            <label htmlFor={name}>{name}: </label>
            <input type={'text'} readOnly={true} value={value} name={name} onClick={handleShowBlock} />

            {isOpen && (
                <div className={style.border}>
                    {values.map(el => <div key={el} onClick={() => { onSelect(el); setIsOpen(false)}}>{el}</div>)}
                </div>
            )}
        </div>
    );
};