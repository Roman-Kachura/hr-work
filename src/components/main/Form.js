import style from './Main.module.scss';
import {NavLink} from "react-router-dom";
import {FormSelect} from "../fields/FormSelect";
import {FormFile} from "../fields/FormFile";

export const Form = ({className}) => {
    const submitHandler = (e) => {
        // e.preventDefault();
    }
    return (
        <form onSubmit={submitHandler} className={`${className} ${style.form}`}>
            <h3 className={style.formTitle}>Оставьте заявку на консультацию с HR-Менеджером</h3>
            <h4 className={style.formSubtitle}>и получите бесплатный подбор работы по вашим критериям</h4>
            <div className={`${style.formChoice} flex-start-center`}>
                <NavLink to='/'>Для соискателей</NavLink>
                <NavLink to='/123'>Для работодателей</NavLink>
            </div>
            <div className={`${style.formFields} flex-start-center`}>
                <input type='text' placeholder='Ваше имя'/>
                <FormSelect text='Выберете удобный способ связи'/>
                <FormFile/>
                <input className={style.submitBtn} type='submit' value='Отправить'/>
            </div>
        </form>
    )
}
