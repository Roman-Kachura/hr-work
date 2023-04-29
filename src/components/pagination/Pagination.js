import style from './Pagination.module.scss';
import arrowDown from '../../images/arrow-down.svg';
import {getPaginationButtons} from "./PaginationButtons";

export const Pagination = ({pageCount, currentPage, changePage}) => {
    const buttons = getPaginationButtons(pageCount, currentPage);
    const pushButton = (item) => {
        if (item === '...') return <span key={`span${item}`}>...</span>;
        if (item === '>') {
            return (
                <button key={`btn${item}`} className={style.paginationIconButton}
                        onClick={() => changePage(currentPage + 1)}>
                    <span className={`${style.paginationIcon} image-container`}>
                        <img src={arrowDown} alt=""/>
                    </span>
                </button>
            )
        }
        const finishClassName = item === currentPage
            ? `${style.paginationButton} ${style.active}`
            : style.paginationButton;
        return <button
            key={`btn${item}`}
            className={finishClassName}
            onClick={() => changePage(item)}
        >{item}
        </button>

    }
    return (
        <div className={style.pagination}>
            {buttons.map(pushButton)}
        </div>
    )
}