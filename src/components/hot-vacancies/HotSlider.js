import style from './HotVacancies.module.scss';
import {HotItem} from "./HotItem";
import arrowRight from '../../images/arrowRight.svg';
import {useEffect, useState} from "react";

export const hotVacancies = [
    {
        title: 'Комплектовщик на склад одежды в Катовице',
        salary: '3 € в час',
        schedule: '12 часов в день',
        country: 'Город: Катовице, Польша',
        lastVacancies: 'Оставшихся вакансий: ВСЕГО 3 🔥',
    },
    {
        title: 'Комплектовщик на склад одежды в Гданьск',
        salary: '3 € в час',
        schedule: '8 часов в день',
        country: 'Город: Гданьск, Польша',
        lastVacancies: 'Оставшихся вакансий: ВСЕГО 3 🔥',
    },
    {
        title: 'Комплектовщик на склад одежды в Варшаве',
        salary: '3 € в час',
        schedule: '12 часов в день',
        country: 'Город: Варшава, Польша',
        lastVacancies: 'Оставшихся вакансий: ВСЕГО 2 🔥',
    },
    {
        title: 'Комплектовщик на склад одежды в Гданьск',
        salary: '3 € в час',
        schedule: '8 часов в день',
        country: 'Город: Гданьск, Польша',
        lastVacancies: 'Оставшихся вакансий: ВСЕГО 1 🔥',
    },
    {
        title: 'Комплектовщик на склад одежды в Гданьск',
        salary: '3 € в час',
        schedule: '8 часов в день',
        country: 'Город: Гданьск, Польша',
        lastVacancies: 'Оставшихся вакансий: ВСЕГО 1 🔥',
    },
    {
        title: 'Комплектовщик на склад одежды в Гданьск',
        salary: '3 € в час',
        schedule: '8 часов в день',
        country: 'Город: Гданьск, Польша',
        lastVacancies: 'Оставшихся вакансий: ВСЕГО 1 🔥',
    }
]

export const HotSlider = () => {
    const [leftPosition, setLeftPosition] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [init, setInit] = useState(false);
    let gapInWrapper = 30;
    let moveItemCount = 1;
    let showItemCount = 3;
    const widthWrapper = hotVacancies.length * (itemWidth + gapInWrapper);
    const lastItemsPosition = widthWrapper - ((itemWidth + gapInWrapper) * (hotVacancies.length - showItemCount - moveItemCount));
    const resizeHandler = () => {
        if (window.innerWidth > 900) showItemCount = 3;
        if (window.innerWidth < 900) showItemCount = 2;
        if (window.innerWidth < 700) showItemCount = 1;
    }

    resizeHandler();


    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
    }, [window.innerWidth]);

    useEffect(() => {
        if (!init) {
            setInit(true);
            return;
        }
        if (init) {
            const blockWidth = document.querySelector('#sliderBlock').clientWidth;
            const widthOfOneItem = Math.ceil(blockWidth / showItemCount) - gapInWrapper;
            setItemWidth(widthOfOneItem)
        }
    }, [init])

    const moveSlider = () => {
        const newLeftPosition = leftPosition - (itemWidth + gapInWrapper) * moveItemCount;
        if (newLeftPosition > -lastItemsPosition) {
            setLeftPosition(newLeftPosition);
        } else {
            setLeftPosition(0);
        }
    }
    return (
        <div className={style.hotSlider}>
            <div id='sliderBlock' className={style.sliderBlock}>
                <div id='sliderWrapper' className={style.sliderWrapper}
                     style={{left: `${leftPosition}px`, width: `${widthWrapper}px`}}>
                    {
                        hotVacancies.map((v, i) =>
                            <HotItem
                                key={i}
                                title={v.title}
                                country={v.country}
                                lastVacancies={v.lastVacancies}
                                salary={v.salary}
                                schedule={v.schedule}
                                styleItem={{width: `${itemWidth}px`, height: '100%', marginRight: `${gapInWrapper}px`}}
                            />
                        )
                    }
                </div>
            </div>

            <button onClick={moveSlider} className={style.sliderButton}>
                <span className='image-container'>
                    <img src={arrowRight} alt=''/>
                </span>
            </button>
        </div>
    )
}