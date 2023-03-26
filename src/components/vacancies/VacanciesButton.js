import style from "./Vacancies.module.scss";

export const VacanciesButton = ({value, activeValue, callBack}) => {
    return (
        <button
            className={activeValue === value ? `${style.sideBarButton} ${style.active}` : style.sideBarButton}
            onClick={() => callBack(value)}>
            {value}
        </button>
    )
}