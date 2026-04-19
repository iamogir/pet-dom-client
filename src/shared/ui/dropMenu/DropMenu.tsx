import style from './dropMenu.module.css'

interface Props {
    values: string[]
}

export const DropMenu = ({ values }: Props) => {
    return (
        <div className={style.border}>
            {values.map(el => <li key={el}>{el}</li>)}
        </div>
    );
};