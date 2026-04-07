import {petBreed, petSpecies} from "entities/pet/model";
import type {ChangeEvent} from "react";

interface Props {
    petType: string,
    petBreeds: string,
    filterFn: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const PetFilter = ({ petType, petBreeds, filterFn }: Props) => {

    return (
        <section>
            <p> Type filter</p>
            <select value={petType} name={'type'} onChange={filterFn}>
                <option value="">all pet types</option>
                {petSpecies.map(sp => <option key={sp}>{sp}</option>)}
            </select>

            <p>Breed filter</p>
            <select value={petBreeds} name={'breed'} onChange={filterFn}>
                <option value="">all breeds</option>
                {petBreed.map(br => <option key={br}>{br}</option>)}
            </select>

        </section>
    );
};