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

    // const [form, setForm] = useState<IPetForm>({
    //     name: '',
    //     species: '',
    //     breed: '',
    //     birthDate: '',
    //     weight: -1,
    //     sex: '',
    //     photoUrl: '',
    //     confirm: false,
    // });
    // const queryClient = useQueryClient();
    // const { mutate } = useAddNewPet(
    //     {
    //     onSuccess: () => queryClient.invalidateQueries({ queryKey: petQueryKeys.all})
    // }
    // );

    // const navigate = useNavigate();


    // const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    //     event.preventDefault();
    //
    //     const eventTarget = event.target;
    //     setForm(prev => ({...prev, [eventTarget.name]: eventTarget.value}));
    // }
    //
    // const handleSubmit = (event: { preventDefault: () => void; }) => {
    //     event.preventDefault();
    //     const isConfirmed = confirm('Check pet data: \n' + form.name + '\n' + form.species + '\n' + form.breed + '\n' + form.birthDate + '\n' + form.weight + '\n' + form.sex);
    //     if (!isConfirmed) return;
    //
    //     const petObj: ICreatePetDto = toServerPetObjectCreate(form);
    //     mutate(petObj)
    //
    //     navigate('/my_pets');
    // }

    return (
        <div>
            <h2>Write information about your new pet:</h2>
            <br/>
            <PetForm/>
            <Link to={'/user'}><button>Back to profile</button></Link>

        </div>
    );
};