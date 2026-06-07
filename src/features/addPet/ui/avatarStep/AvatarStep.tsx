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
            <input type={'file'} />

            //check up

            <Button onClick={form.prevStep} text={'Back'}/>
            <Button onClick={onSubmit} text={'Submit'} disabled={isPending}/>
        </div>
    );
};