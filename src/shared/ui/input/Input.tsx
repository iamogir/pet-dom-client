import style from './input.module.css'
import type {ChangeEvent, MouseEventHandler} from "react";

interface Props {
    label?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void,
    value: string,
    placeholder?: string
    type: 'text' | 'password' | 'email' | 'number' | 'tel',
    name?: string,
    readOnly?: boolean,
    onClick?: MouseEventHandler<HTMLInputElement>,
}

export const Input = ({ label, onChange, value, placeholder, type, name, readOnly, onClick }: Props) => {
    return (
        <article className={style.info}>
            <label htmlFor={name}>{label}</label>
            <input type={type}
                   name={name}
                   onChange={onChange}
                   value={value}
                   placeholder={placeholder}
                   readOnly={readOnly}
                   onClick={onClick}
            />
        </article>
    );
};