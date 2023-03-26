import style from './Vacancies.module.scss';
import arrowDown from '../../images/arrow-down.svg';

export const VacanciesPagination = () => {
    return (
        <div className={style.pagination}>
            <button className={`${style.paginationButton} ${style.active}`}>1</button>
            <button className={style.paginationButton}>2</button>
            <button className={style.paginationButton}>3</button>
            <span>...</span>
            <button className={style.paginationButton}>15</button>
            <button className={style.paginationIconButton}>
                <span className={`${style.paginationIcon} image-container`}>
                    <img src={arrowDown} alt=""/>
                </span>
            </button>
        </div>
    )
}