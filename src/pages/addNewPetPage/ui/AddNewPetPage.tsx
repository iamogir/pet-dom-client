// import style from './addNewPetPage.module.css'
// import {type ChangeEvent, useState} from "react";
// import type {ICreatePetDto, IPetForm} from "entities/pet/model";
// import {toServerPetObjectCreate} from "entities/pet/lib";
// import {useAddNewPet} from "entities/pet/hooks";
// import {useQueryClient} from "@tanstack/react-query";
// import {petQueryKeys} from "entities/pet/api";
import {Link,
    // useNavigate
} from "react-router-dom";
import {PetForm} from "entities/pet/ui/petForm";

export const AddNewPetPage = () => {

    // const queryClient = useQueryClient();
    // const { mutate } = useAddNewPet(
    //     {
    //     onSuccess: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all})
    // }
    // );


    return (
        <div>
            <h2>Write information about your new pet:</h2>
            <br/>
            <PetForm/>
            <Link to={'/user'}><button>Back to profile</button></Link>

        </div>
    );
};