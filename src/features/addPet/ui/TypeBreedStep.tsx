import {useAddPetForm} from "features/addPet";
import {DropMenu} from "shared/ui/dropMenu";
import {petBreedMap} from "entities/pet/model";

interface Props {
    form: ReturnType<typeof useAddPetForm>;
}

export const TypeBreedStep = ({ form }: Props) => {

    const species = Object.keys(petBreedMap);
    const breeds = [];
    for (const [key, value] of Object.entries(petBreedMap)) {
        if (key === form.formData.species) breeds.push(...value);
    }

    return (
        <>
            <DropMenu values={species}
                      onSelect={(value: string) => form.setFormFields('species' as keyof FormData, value)}
                      value={form.formData.species} //check too
                      name={'species'}
                      label={'He looks like... who?'}
            />

            <DropMenu values={breeds as unknown as readonly string[]}
                      onSelect={(value: string) => form.setFormFields('breed' as keyof FormData, value)}
                      value={form.formData.breed} //check and fix
                      name={'breed'}
                      label={'Does he have a breed?'}
            />

            <button onClick={form.prevStep}>Back</button>
            <button onClick={form.nextStep}>Next</button>
        </>
    );

};