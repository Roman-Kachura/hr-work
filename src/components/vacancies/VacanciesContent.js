import style from './Vacancies.module.scss';
import {VacanciesItem} from "./VacanciesItem";
import {Pagination} from "../pagination/Pagination";
import {useState} from "react";

export const VacanciesContent = () => {
    const [page, setPage] = useState(1);
    const changePage = (n) => setPage(n);
    const pageCount = 15;
    return (
        <div className={style.vacanciesContent}>
            <VacanciesItem/>
            <VacanciesItem/>
            <VacanciesItem/>
            <Pagination currentPage={page} pageCount={pageCount} changePage={changePage}/>
        </div>
    )
}