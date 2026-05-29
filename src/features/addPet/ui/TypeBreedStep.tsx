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
        <div>
            <DropMenu values={species}
                      onSelect={(value: string) => form.setFormFields('species' as keyof FormData, value)}
                      value={form.formData.species}
                      name={'species'}
            />

            <DropMenu values={breeds as unknown as readonly string[]}
                      onSelect={(value: string) => form.setFormFields('breed' as keyof FormData, value)}
                      value={form.formData.breed}
                      name={'breed'}
            />

            <button onClick={form.prevStep}>Back</button>
            <button onClick={form.nextStep}>Next</button>
        </div>
    );

};