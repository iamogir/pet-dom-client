import {useAddPetForm} from "features/addPet";
import style from './nameStep.module.css'
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";

interface Props {
    form: ReturnType<typeof useAddPetForm>;
}

export const NameStep = ({ form }: Props) => {
    return (
        <article className={style.container}>
            <Input type={'text'}
                   name={'name'}
                   value={form.formData.name}
                   label={"Your friend's name?"}
                   onChange={(e) =>
                       form.setFormFields(e.target.name as keyof FormData, e.target.value)}
                   placeholder={'Diego'}
            />
            <Button onClick={form.nextStep} text={'Continue'} disabled={!form.formData.name.trim()}/>
        </article>
    );
};