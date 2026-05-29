import {useAddPetForm} from "features/addPet";

interface Props {
    form: ReturnType<typeof useAddPetForm>;
}

export const NameStep = ({ form }: Props) => {
    return (
        <div>
            <label htmlFor={'name'}>Fill your pet's name</label>
            <input type={'text'} name={'name'} onChange={(e) =>
                form.setFormFields(e.target.name as keyof FormData, e.target.value)} value={form.formData.name} placeholder={'Diego'} />

            <button onClick={form.nextStep} disabled={!form.formData.name.trim()}>Next</button>
        </div>
    );
};