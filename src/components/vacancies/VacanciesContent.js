import style from './Vacancies.module.scss';
import {VacanciesItem} from "./VacanciesItem";
import {Pagination} from "../pagination/Pagination";

export const VacanciesContent = () => {
    return (
        <div className={style.vacanciesContent}>
            <VacanciesItem/>
            <VacanciesItem/>
            <VacanciesItem/>
            <Pagination/>
        </div>
    )
}