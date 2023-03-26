import style from './Vacancies.module.scss';
import {VacanciesItem} from "./VacanciesItem";
import {VacanciesPagination} from "./VacanciesPagination";

export const VacanciesContent = () => {
    return (
        <div className={style.vacanciesContent}>
            <VacanciesItem/>
            <VacanciesItem/>
            <VacanciesItem/>
            <VacanciesPagination/>
        </div>
    )
}