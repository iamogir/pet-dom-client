import {petSpecies} from "entities/pet/model";

interface Props {
    petType?: string,
    petBreed?: string,
}

export const PetFilter = ({ petType, petBreed }: Props) => {



    return (
        <section>
            <p> Type filter</p>
            <select value={type} name={'type'} onChange={handleFilterChange}>
                <option value="">all pet types</option>
                {petSpecies.map(sp => <option key={sp}>{sp}</option>)}
            </select>
        </section>
    );
};