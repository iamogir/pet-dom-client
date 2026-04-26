import type {ChangeEvent} from "react";
import {petBreedMap} from "entities/pet/model";

interface Props {
    petType: string,
    petBreeds: string,
    filterFn: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const PetFilter = ({ petType, petBreeds, filterFn }: Props) => {

    const breedsArr = petType.toLowerCase() as keyof typeof petBreedMap;

    console.log(petBreedMap[breedsArr])

    return (
        <section>
            <p> Type filter</p>
            <select value={petType} name={'type'} onChange={filterFn}>
                <option value="">all pet types</option>
                {Object.keys(petBreedMap).map(sp => <option key={sp}>{sp}</option>)}
            </select>

            <p>Breed filter</p>
            <select value={petBreeds} name={'breed'} onChange={filterFn}>
                <option value="">all breeds</option>
                {petBreedMap[breedsArr]?.map(br => <option key={br}>{br}</option>)}
            </select>

        </section>
    );
};