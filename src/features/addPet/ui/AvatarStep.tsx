import {useAddPetForm} from "features/addPet";

interface Props {
    form: ReturnType<typeof useAddPetForm>;
}

export const AvatarStep = ({ form }: Props) => {
    return (
        <div>
            Avatar step

            <button onClick={form.prevStep}>Back</button>
        </div>
    );
};