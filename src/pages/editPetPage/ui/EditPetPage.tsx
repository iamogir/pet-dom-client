import {usePetById} from "entities/pet/hooks";
import style from "pages/addNewPetPage/ui/addNewPetPage.module.css";

interface Props {
    id: string;
}

export const EditPetPage = ({ id }: Props) => {

    const { isLoading, error, data } = usePetById(id)

    return (
        <div>
            {isLoading ? <p>loading</p> :
                error ? <p>{error.message}</p> :
                    <div>
                        <form className={style.box} onSubmit={handleSubmit}>
                            <label htmlFor={'name'}>Name: </label>
                            <input type={'text'} name={'name'} onChange={handleChange} value={data?.name} />

                            <label htmlFor={'species'}>Species: </label>
                            <input type={'text'} name={'species'} onChange={handleChange} value={data?.species} />

                            <label htmlFor={'breed'}>Breed: </label>
                            <input type={'text'} name={'breed'} onChange={handleChange} value={data?.breed} />

                            <label htmlFor={'birthDate'}>Birth date: </label>
                            <input type={'date'} name={'birthDate'} onChange={handleChange} value={data?.birthDate} />

                            <label htmlFor={'sex'}>Sex: </label>
                            <input type={'text'} name={'sex'} onChange={handleChange} value={data?.sex} />

                            <label htmlFor={'weight'}>Weight: </label>
                            <input type={'number'} name={'weight'} onChange={handleChange} value={data?.weight} />

                            <label htmlFor={'photoUrl'}>Pet photo: </label>
                            <input type={'text'} name={'photoUrl'} onChange={handleChange} value={'url'} />

                            <br/>
                            <button>
                                <label htmlFor={'submit'}>Add new pet</label>
                                <input type={'submit'} name={'submit'} style={{display: 'none'}}/>
                            </button>
                        </form>
                    </div>
            }

        </div>
    );
};