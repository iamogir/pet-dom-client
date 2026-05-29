import {AvatarStep, NameStep, TypeBreedStep, useAddPetForm} from "features/addPet";
import {useAddNewPet} from "entities/pet/hooks";
import type {ICreatePetDto} from "entities/pet/model";
import {toServerPetObjectCreate} from "entities/pet/lib";

export const AddPetForm = () => {

    const form = useAddPetForm();
    const { mutate, isPending } = useAddNewPet();

    const handleSubmit = () => {

        const petDto: ICreatePetDto = toServerPetObjectCreate(form.formData);
        mutate(petDto)

    }

    return (
        <div>
            {form.step === 0 &&
                (<NameStep form={form} />)}

            {form.step === 1 &&
                (<TypeBreedStep form={form} />)}

            {form.step === 2 &&
                (<AvatarStep form={form} onSubmit={handleSubmit} isPending={isPending}  />)}
        </div>
    );
};