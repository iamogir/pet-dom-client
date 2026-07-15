import style from './button.module.css'

interface Props {
    onClick: () => void;
    disabled?: boolean;
    text: string;
    type?: 'submit'
}

export const Button = ({ onClick, disabled, text, type } : Props) => {
    return (
        <button className={style.btn} onClick={onClick} disabled={disabled} type={type}>{text}</button>
    );
};