import style from './input.module.css'
import type {ChangeEvent, MouseEventHandler} from "react";
import {Button} from "shared/ui/button";

interface Props {
    label?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void,
    value?: string,
    placeholder?: string
    type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'file',
    name?: string,
    readOnly?: boolean,
    onClick?: () => void | MouseEventHandler<HTMLInputElement>,
    className?: string,
    accept?: string,
}

export const Input = ({ label, onChange, value, placeholder, type, name, readOnly, onClick, className, accept }: Props) => {

    if (type === 'file')
        return (
            <article className={`${style.info} ${className}`}>
                <p className={style.title}>{label}</p>
                <div>
                    <label htmlFor={name} className={style.fileButton}>
                        Add photo
                    </label>
                    {value && value !== '' && onClick && <Button onClick={onClick} text={'Unpin photo'}/>}
                </div>
                <input
                    id={name}
                    className={style.fileInput}
                    type="file"
                    name={name}
                    accept={accept}
                    onChange={onChange}
                />
            </article>
        )

    return (
        <article className={`${style.info} ${className}`}>
            <label htmlFor={name}>{label}</label>
            <input type={type}
                   name={name}
                   onChange={onChange}
                   value={value}
                   placeholder={placeholder}
                   readOnly={readOnly}
                   onClick={onClick}
                   accept={accept}
            />
        </article>
    );
};