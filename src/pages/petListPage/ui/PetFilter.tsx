import {petBreed, petSpecies} from "entities/pet/model";
import {useAllPets} from "entities/pet/hooks";
import {PetCard} from "entities/pet/ui/petCard";
import type {ChangeEvent} from "react";

interface Props {
    petType: string,
    petBreeds: string,
    filterFn: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const PetFilter = ({ petType, petBreeds, filterFn }: Props) => {

    const petsQuery = useAllPets();


    const filterResults = petsQuery.data?.data.filter(el => {
        const isType = petType ? el.species === petType : true;
        const isBreed = petBreeds ? el.breed === petBreeds : true;

        return isType && isBreed;
    })

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

            { filterResults?.map(el => <PetCard key={el.id} pet={el}/>)}
        </section>
    );
};