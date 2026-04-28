// import style from "pages/homePage/ui/homePage.module.css";
import {PetCard} from "entities/pet/ui/petCard";
import {useAllPets,
    // useMyPets
} from "entities/pet/hooks";
import {useSearchParams} from "react-router-dom";
import {PetFilter, PetSearch} from "pages/petListPage";
import type {ChangeEvent} from "react";


export const PetListPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const searchName = searchParams.get("search_name") || '';
    const type = searchParams.get("type") || '';
    const breed = searchParams.get("breed") || '';

    // const userPets = useMyPets();
    const petsQuery = useAllPets();

    const filterResults = petsQuery.data?.data.filter(el => {
        const isType = type ? el.species === type : true;
        const isBreed = breed ? el.breed === breed : true;
        const isSearch = searchName ? el.name.toLowerCase().includes(searchName.toLowerCase()) : true;
        return isType && isBreed && isSearch;
    })

    const handleFilterChange= (event: ChangeEvent<HTMLSelectElement>) => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            const eventTarget = event.target;
            const value = eventTarget.value;
            const name = eventTarget.name;

            if (value) params.set(name, value);
                else params.delete(name);

            return params;
        })
    }

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {

        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            const eventTarget = event.target;
            const value = eventTarget.value;
            const name = eventTarget.name;

            if (value) params.set(name, value);
            else params.delete(name);

            return params;
        })

    }

    //change line
    //ask what to do

    return (
        <div>
            {/*{userPets.isLoading ? <p> One second, checking pets...</p> :*/}
            {/*    userPets.error ? <p>Oh, something goes wrong: {userPets.error.message + ' ' + userPets.error}</p> :*/}
            {/*        <div className={style.petCards}>*/}
            {/*            {userPets.data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}*/}
            {/*        </div>*/}
            {/*}*/}
            <h1>ALL APP PETS</h1>
            <PetSearch value={searchName} searchFn={handleSearch}/>
            <PetFilter petType={type} petBreeds={breed} filterFn={handleFilterChange}/>
            { filterResults?.map(el => <PetCard key={el.id} pet={el}/>)}
        </div>
    );
};