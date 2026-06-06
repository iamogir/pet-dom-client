import style from './button.module.css'

interface Props {
    onClick: () => void;
    disabled?: boolean;
    text: string;
}

export const Button = ({ onClick, disabled, text } : Props) => {
    return (
        <button className={style.btn} onClick={onClick} disabled={disabled}>{text}</button>
    );
};