import {useAddPetForm} from "features/addPet";

interface Props {
    form: ReturnType<typeof useAddPetForm>;
    onSubmit: () => void;
    isPending: boolean;
}

export const AvatarStep = ({ form, onSubmit, isPending }: Props) => {
    return (
        <div>
            Avatar step

            <button onClick={form.prevStep}>Back</button>
            <button onClick={onSubmit} disabled={isPending}>Submit</button>
        </div>
    );
};