import style from './Search.module.scss';
import lineImg from '../../images/line.svg';
import searchImg from '../../images/search.svg';
import {AppTitle} from "../app/AppTitle";

export const Search = () => {
    return (
        <div className={style.search}>
            <AppTitle
                title='Ищите работу в Беларуси?'
                subtitle='Мы прямая компания-наниматель без посредников в поиске сотрудников'
            />
            <SearchInput/>
        </div>
    )
}

export const SearchInput = () => {
    return (
        <div className={style.searchInput}>
            <input type="text" placeholder='Какая вакансия вас интересует?'/>
            <div className={`${style.searchLoupe} image-container`}>
                <img src={searchImg} alt=""/>
            </div>
        </div>
    )
}