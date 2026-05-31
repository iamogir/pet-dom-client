import {useAddPetForm} from "features/addPet";
import style from './nameStep.module.css'

interface Props {
    form: ReturnType<typeof useAddPetForm>;
}

export const NameStep = ({ form }: Props) => {
    return (
        <>
            <article className={style.info}>
                <label htmlFor={'name'}>Your friend's name?</label>
                <input type={'text'} name={'name'} onChange={(e) =>
                    form.setFormFields(e.target.name as keyof FormData, e.target.value)} value={form.formData.name}
                       placeholder={'Diego'}/>
            </article>

            <button className={style.btn} onClick={form.nextStep} disabled={!form.formData.name.trim()}>Continue</button>

        </>
    );
};