import style from './dropMenu.module.css'
import type {ChangeEvent} from "react";
import type {IUserForm} from "entities/user/model";

interface Props {
    values: string[],
    func: any
}

export const DropMenu = ({ values, func }: Props) => {

    const selectValueHandler = (event) => {
        const input = event.target.parentElement.previousElementSibling;
        input.value = event.target.key
        console.log(input)

        const eventTarget = event.target;
        func((prev: IUserForm) => ({...prev,  [input.name]: eventTarget.key }))
    }

    return (
        <div className={style.border}>
            {values.map(el => <div key={el} value={el} onClick={selectValueHandler}>{el}</div>)}
        </div>
    );
};