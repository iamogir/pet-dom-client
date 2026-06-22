import {useAddPetForm} from "features/addPet";
import {Button} from "shared/ui/button";

interface Props {
    form: ReturnType<typeof useAddPetForm>;
    onSubmit: () => void;
    isPending: boolean;
}

export const AvatarStep = ({ form, onSubmit, isPending }: Props) => {

    const canPreviewLocally = (file: File) => {

        return ['image/jpeg', 'image/png', 'image/webp'].includes(file.type);

    };

    return (
        <div>
            <label >He looks like:</label>
            <input name={'avatar'} type={'file'} accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                   onChange={(e) => {
                       const file = e.target.files?.[0];
                       if (!file) return;
                       form.setFormFields(e.target.name as keyof FormData, file)
                   }}
            />

            {form.formData.avatar && canPreviewLocally(form.formData.avatar) ? (<img src={URL.createObjectURL(form.formData.avatar)} alt="Pet preview" />) :
                form.formData.avatar ? ( <p>{form.formData.avatar.name}</p>) : null}

            <Button onClick={form.prevStep} text={'Back'}/>
            <Button onClick={onSubmit} text={'Submit'} disabled={isPending}/>
        </div>
    );
};