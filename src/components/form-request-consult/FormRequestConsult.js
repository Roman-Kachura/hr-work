import style from './FormRequestConsult.module.scss';
import {NavLink} from "react-router-dom";
import {FormSelect} from "../fields/FormSelect";
import {FormFile} from "../fields/FormFile";
import {FormRadio} from "../fields/FormRadio";

export const FormRequestConsult = ({className}) => {
    const submitHandler = (e) => {
        // e.preventDefault();
    }

    const finalClassNameForm = className ? style.formRequestConsultSmall : style.formRequestConsult;
    const finalClassName = className ? style.formFieldsSmall : style.formFields;

    return (
        <form onSubmit={submitHandler} className={finalClassNameForm}>
            <div className={`${style.formTitle} formTitleBase`}>Оставьте заявку на консультацию с HR-Менеджером</div>
            <div className={`${style.formSubtitle} formSubtitleBase`}>и получите бесплатный подбор работы по вашим критериям</div>
            <div className={`${style.formChoice}`}>
                <NavLink to='/'>Для соискателей</NavLink>
                <NavLink to='/123'>Для работодателей</NavLink>
            </div>
            <div className={finalClassName}>
                <label><input type='text' className="inputBase" placeholder='Ваше имя'/></label>
                <FormRadio text='Выберете удобный способ связи'/>
                <FormFile/>
                <label><input className="baseBtn" type='submit' value='Отправить'/></label>
            </div>
        </form>
    )
}
