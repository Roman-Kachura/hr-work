import {Search} from "../search/Search";
import style from './Vacancies.module.scss';
import {VacanciesSideBar} from "./VacanciesSideBar";
import {VacanciesItem} from "./VacanciesItem";
import {VacanciesContent} from "./VacanciesContent";

export const Vacancies = () => {
    return (
        <section className={style.vacancies}>
            <div className='container'>
                <Search/>
                <div className={style.vacanciesContainer}>
                    <VacanciesSideBar/>
                    <VacanciesContent/>
                </div>
            </div>
        </section>
    )
}





