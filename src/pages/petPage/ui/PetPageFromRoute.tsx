import {useParams} from "react-router-dom";
import {PetPage} from "pages/petPage";

export const PetPageFromRoute = () => {

    const { id } = useParams();

    if (!id) return <p>NO DATA :(</p>;

    return (
        <PetPage petId={id} />
    );
};