import {useState} from "react";

export const useAddPetForm = () => {

    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        species: '',
        breed: '',
        photoUrl: ''
    });

    const nextStep = () => {
        setStep((prev) => prev + 1);
    }

    const prevStep = () => {
        setStep((prev) => prev - 1);
    }

    const setFormFields = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    }

    const resetForm = () => {
        setFormData({
            name: '',
            species: '',
            breed: '',
            photoUrl: ''
        })
    }

    return {
        step,
        formData,
        nextStep,
        prevStep,
        setFormFields,
        resetForm
    }

}