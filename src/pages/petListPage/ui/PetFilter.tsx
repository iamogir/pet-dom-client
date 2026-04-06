import {petSpecies} from "entities/pet/model";
import {useAllPets} from "entities/pet/hooks";
import {PetCard} from "entities/pet/ui/petCard";

interface Props {
    petType?: string,
    petBreed?: string,
    filterFn: (event: any) => void
}

export const PetFilter = ({ petType, petBreed, filterFn }: Props) => {

    const petsQuery = useAllPets();


    const filterResults = petsQuery.data?.data.filter(el => {
        const isType = type ? el.species === type : true;
        const isBreed = breed ? el.breed === breed : true;

        return isType && isBreed;
    })

    return (
        <section>
            <p> Type filter</p>
            <select value={type} name={'type'} onChange={filterFn}>
                <option value="">all pet types</option>
                {petSpecies.map(sp => <option key={sp}>{sp}</option>)}
            </select>

            { filterResults?.map(el => <PetCard key={el.id} pet={el}/>)}
        </section>
    );
};