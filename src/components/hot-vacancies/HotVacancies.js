import style from './HotVacancies.module.scss';
import {AppTitle} from "../app/AppTitle";
import {HotSlider} from "./HotSlider";
import {HotForm} from "./HotForm";

export const HotVacancies = () => {
    return (
        <section className={style.hotVacancies}>
            <div className='container'>
                <AppTitle
                    title='Горящие вакансии'
                    subtitle='осталось 1-5 рабочих мест'
                    className={style.hotVacanciesTitle}
                />
                <HotSlider/>
                <HotForm/>
            </div>
        </section>
    )
}