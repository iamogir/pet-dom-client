import style from './addNewPetPage.module.css'

export const AddNewPetPage = () => {
    return (
        <div>
            <h2>Write information about your new pet:</h2>
            <br/>
            <form className={style.box} onSubmit={createNewPetObj}>
                <label htmlFor={'petName'}>Name: </label>
                <input type={'text'} name={'petName'} />

                <label htmlFor={'petSpecies'}>Species: </label>
                <input type={'text'} name={'petSpecies'} />

                <label htmlFor={'petBreed'}>Breed: </label>
                <input type={'text'} name={'petBreed'} />

                <label htmlFor={'petBirth'}>Birth date: </label>
                <input type={'date'} name={'petBirth'} />

                <label htmlFor={'petSex'}>Sex: </label>
                <input type={'text'} name={'petSex'} />

                <label htmlFor={'petWeight'}>Weight: </label>
                <input type={'number'} name={'petWeight'} />

                <label htmlFor={'petImg'}>Pet photo: </label>
                <input type={'text'} name={'petImg'} />
            </form>

        </div>
    );
};