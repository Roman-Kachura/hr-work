import style from './HotVacancies.module.scss';
import {NavLink} from "react-router-dom";

export const HotItem = (
    {styleItem, title, salary, schedule, country, lastVacancies}
) => {
    return (
        <div className={style.hotItem} style={styleItem}>
            <h4 className={style.hotVacanciesTitle}>{title}</h4>
            <div className={style.hotSalary}>{salary}</div>
            <div className={style.hotSchedule}>{schedule}</div>
            <div className={style.hotCountry}>{country}</div>
            <div className={style.hotLastVacancies}>{lastVacancies}</div>
            <NavLink to='/' className={style.hotButton}>Смотреть условия</NavLink>
        </div>
    )
}