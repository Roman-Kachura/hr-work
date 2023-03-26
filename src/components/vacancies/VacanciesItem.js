import style from './Vacancies.module.scss';
import {FormSelect} from "../fields/FormSelect";
import {NavLink} from "react-router-dom";
import vacanciesImage from '../../images/vacancies-image.svg';

export const VacanciesItem = () => {
    return (
        <div className={style.vacanciesItem}>
            <div className={style.itemText}>
                <h4 className={style.itemTitle}>Комплектовщик на склад одежды в Гданьск</h4>
                <div className={style.itemSalary}>3 € в час</div>
                <div className={style.itemSchedule}>12 часов в день</div>
                <div className={style.itemCountry}>Город: Гданьск, Польша</div>
                <div className={style.itemPayment}>Оплата за жильё: БЕСПЛАТНО + 50 € за комунальные платежи</div>
                <div className={style.itemLastVacancies}>Оставшихся вакансий: ВСЕГО 3 🔥</div>
                <div className={style.itemForm}>
                    <h5 className={style.formTitle}>Остались вопросы? Звоните!</h5>
                    <div className={style.formButtons}>
                        <FormSelect text='Выберете удобный способ связи' className={style.formSelect}/>
                        <NavLink className={style.formLink} to={'/'}>Смотреть условия</NavLink>
                    </div>
                </div>
            </div>
            <div className={`${style.itemImage} image-container`}>
                <img src={vacanciesImage} alt=''/>
            </div>
        </div>
    )
}