import style from './homePage.module.css'
import {WelcomePart} from "./welcomePart";
import {PetCard} from "entities/pet/ui/petCard";
import {useMyPets} from "entities/pet/hooks";
import {EmptyState} from "features/emptyState/ui";
import {Loader} from "shared/ui/loader";
import {useEffect, useRef, useState} from "react";
import Arrow from '../../../shared/assert/icons/arrow.svg?react'
import {NewPetButton} from "entities/pet/ui/newPetButton";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {

    const {data, isLoading, error} = useMyPets();
    // const temp = useAllPetsByUserId("292060dd-24dd-48e5-b2be-be1d6f2855cd");
    const navigate = useNavigate();
    const petBox = useRef<HTMLDivElement | null>(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const scrollAmount = window.innerWidth < 1024 ? 270 : 370;

    const scrollBox = (value: number) => {
        const box = petBox.current;
        if (box) {
            box.scrollBy({
                left: value,
                behavior: "smooth"
            })
        }
    }

    const toggleButtons = () => {
        const box = petBox.current;
        if (box) {
            const { scrollLeft, scrollWidth, clientWidth } = box;
            setShowLeft(scrollLeft > 1);
            setShowRight(scrollLeft < scrollWidth - clientWidth - 1);
        }

    }

    useEffect(() => {
        requestAnimationFrame(toggleButtons);
    }, [data])

    return (
        <>
            {/*{ temp.data?.data.map((el) => <PetCard key={el.id} pet={el}/>)}*/}
            <WelcomePart/>
            <div className={style.text}>
                <p>MY PETS</p>
                <p className={style.btnAll} onClick={() => navigate('/my_pets')}>View all  <Arrow className={style.arrowAll}/></p>
            </div>
            {isLoading ? <Loader/> :
                error ? <EmptyState variant={'pets'}/> :
                    <div className={style.container}>
                        { showLeft && <Arrow className={`${style.btn} ${style.btnLeft}`} onClick={() => scrollBox(-scrollAmount)}>LEFT</Arrow>}
                        { showRight && <Arrow className={style.btn} onClick={() => scrollBox(scrollAmount)}/>}
                        <section className={style.petCards} ref={petBox} onScroll={toggleButtons}>
                            {data?.data.map((pet) => <PetCard key={pet.id} pet={pet}/>)}
                            <NewPetButton/>
                        </section>
                    </div>
            }
            <h1 style={{ color: 'red' }}>. . . ask ai . . .</h1>
        </>
    );
};