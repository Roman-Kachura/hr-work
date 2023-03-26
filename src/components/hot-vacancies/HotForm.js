import style from './HotVacancies.module.scss';
import {useState} from "react";
import {FormSelect} from "../fields/FormSelect";

export const HotForm = () => {
    const [name, setName] = useState('');
    const changeHandler = (e) => setName(e.currentTarget.value);
    return (
        <div className={style.hotForm}>
            <h3 className={style.formTitle}>Не нашли нужной вам вакансии?</h3>
            <h4 className={style.formSubtitle}>Напишите нашему менеджеру в один из удобных для вас месенджеров и мы
                подберём под вас топ вакансий из базы</h4>
            <form className={style.form}>
                <input className={style.inputName} type='text' placeholder='Ваше имя' name='name' value={name}
                       onChange={changeHandler}/>
                <FormSelect className={style.select} text='Выберете удобный способ связи'/>
                <input className={style.submitBtn} type='submit' value='Отправить'/>
            </form>
        </div>
    )
}