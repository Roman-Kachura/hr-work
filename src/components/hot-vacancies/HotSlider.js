import style from './HotVacancies.module.scss';
import {HotItem} from "./HotItem";
import arrowRight from '../../images/arrowRight.svg';
import {useState} from "react";

const hotVacancies = [
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
    }
]

export const HotSlider = () => {
    const [leftPosition, setLeftPosition] = useState(0);
    const gapInWrapper = 2.0833;
    const widthItem = 22.2395;
    const moveItemCount = 2;
    const widthWrapper = hotVacancies.length * (widthItem + gapInWrapper);

    const moveSlider = () => {
        const newLeftPosition = leftPosition - (widthItem + gapInWrapper) * moveItemCount;
        if (newLeftPosition > -widthWrapper) {
            setLeftPosition(newLeftPosition);
        } else{
            setLeftPosition(0);
        }
        console.log('leftPosition', leftPosition);
        console.log('widthWrapper', widthWrapper);
    }
    return (
        <div className={style.hotSlider}>
            <div className={style.sliderBlock}>
                <div id='sliderWrapper' className={style.sliderWrapper}
                     style={{gap: `${gapInWrapper}vw`, left: `${leftPosition}vw`}}>
                    {
                        hotVacancies.map((v, i) =>
                            <HotItem
                                key={i}
                                title={v.title}
                                country={v.country}
                                lastVacancies={v.lastVacancies}
                                salary={v.salary}
                                schedule={v.schedule}
                                styleItem={{width: `${widthItem}vw`}}
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