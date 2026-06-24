import {useAddPetForm} from "features/addPet";
import {DropMenu} from "shared/ui/dropMenu";
import {petBreedMap} from "entities/pet/model";
import {Button} from "shared/ui/button";
import style from './typeBreedStep.module.css'

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
                      value={form.formData.species}
                      name={'species'}
                      label={'He looks like... who?'}
            />

            <DropMenu values={breeds as unknown as readonly string[]}
                      onSelect={(value: string) => form.setFormFields('breed' as keyof FormData, value)}
                      value={form.formData.breed ?? ''}
                      name={'breed'}
                      label={'Does he have a breed?'}
            />

            <div className={style.buttons}>
                <Button onClick={form.prevStep} text={'Back'}/>
                <Button onClick={form.nextStep} text={'Next'} disabled={!form.formData.breed}/>
            </div>
        </>
    );

};