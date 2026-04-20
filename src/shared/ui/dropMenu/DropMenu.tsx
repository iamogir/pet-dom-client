import style from './dropMenu.module.css'

interface Props {
    values: string[],
    onSelect: (value: string) => void,
}

export const DropMenu = ({ values, onSelect }: Props) => {

    return (
        <div className={style.border}>
            {values.map(el => <div key={el} onClick={() => onSelect(el)}>{el}</div>)}
        </div>
    );
};