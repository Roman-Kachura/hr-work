import style from './Vacancies.module.scss';
import {VacanciesSideBar} from "./VacanciesSideBar";
import {VacanciesContent} from "./VacanciesContent";

export const Vacancies = () => {
    return (
        <section className={style.vacancies}>
            <div className='container'>
                <div className={style.vacanciesContainer}>
                    <VacanciesSideBar/>
                    <VacanciesContent/>
                </div>
            </div>
        </section>
    )
}





