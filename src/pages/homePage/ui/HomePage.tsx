import style from './homePage.module.css'
import {WelcomePart} from "shared/ui/welcomePart";
import {PetCard} from "entities/pet/ui/petCard";
import {useMyPets} from "entities/pet/hooks";
import {EmptyState} from "features/emptyState/ui";
import {Loader} from "shared/ui/loader";
import {useEffect, useRef, useState} from "react";
import Arrow from '../../../shared/assert/icons/arrow.svg?react'

export const HomePage = () => {

    const {data, isLoading, error} = useMyPets();
    // const temp = useAllPetsByUserId("292060dd-24dd-48e5-b2be-be1d6f2855cd");
    const petBox = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    const scrollAmount = 150;

    const scrollBox = (value: number) => {
        const box = petBox.current as unknown as HTMLElement;
        if (box) {
            box.scrollBy({
                left: value,
                behavior: "smooth"
            })
        }
    }

    const toggleButtons = () => {
        const box = petBox.current as unknown as HTMLElement;
        if (box) {
            const { scrollLeft, scrollWidth, clientWidth } = box;
            setShowLeft(scrollLeft > 1);
            setShowRight(scrollLeft < scrollWidth - clientWidth - 1);
        }

    }

    useEffect(() => {
        toggleButtons();
        window.addEventListener('resize', toggleButtons);

        return () => {
            window.removeEventListener('resize', toggleButtons);
        };
    }, [])

    return (
        <>
            {/*{ temp.data?.data.map((el) => <PetCard key={el.id} pet={el}/>)}*/}
            <h1 style={{ color: 'red' }}>. . . news block . . .</h1>
            <WelcomePart/>
            <h2>Please, check your pets and their comfort:</h2>
            {isLoading ? <Loader/> :
                error ? <EmptyState variant={'pets'}/> :
                    <div>
                        { showLeft && <Arrow className={`${style.btn} ${style.btnLeft}`} onClick={() => scrollBox(-scrollAmount)}>LEFT</Arrow>}
                        { showRight && <Arrow className={style.btn} onClick={() => scrollBox(scrollAmount)}/>}
                        <section className={style.petCards} ref={petBox} onScroll={toggleButtons}>
                            {data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                            <div>
                                Add new pet +
                            </div>
                        </section>
                    </div>
            }
            <h1 style={{ color: 'red' }}>. . . ask ai . . .</h1>
        </>
    );
};