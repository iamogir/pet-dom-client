import {useAddPetForm} from "features/addPet";
import {Button} from "shared/ui/button";

interface Props {
    form: ReturnType<typeof useAddPetForm>;
    onSubmit: () => void;
    isPending: boolean;
}

export const AvatarStep = ({ form, onSubmit, isPending }: Props) => {
    return (
        <div>
            <label >He looks like:</label>
            <input name={'avatar'} type={'file'}
                   onChange={(e) => { if (e.target.files?.[0]) form.setFormFields(e.target.name as keyof FormData, e.target.files?.[0])}}
            />

            <Button onClick={form.prevStep} text={'Back'}/>
            <Button onClick={onSubmit} text={'Submit'} disabled={isPending}/>
        </div>
    );
};