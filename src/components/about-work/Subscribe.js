import style from './AboutWork.module.scss';
import infoLight from '../../images/info-light.svg';
import {AppTitle} from "../app/AppTitle";
import {FormSelect} from "../fields/FormSelect";
import {FormFile} from "../fields/FormFile";
import employeeImage from '../../images/employee.svg';


export const Subscribe = ({className}) => {
    const finalClassName = className ? `${style.subscribe} ${className}` : style.subscribe;
    return (
        <div className={finalClassName}>
            <h4 className={style.subscribeTitle}>
                Подписывайтесь на наш телеграмм канал,<br/>
                там мы выкладываем новые вакансии в ЕС
            </h4>
            <div className={style.subscribeContainer}>
                <div className={style.telegram}>
                    <div className={style.info}>
                        <div className={`${style.infoIcon} image-container`}>
                            <img src={infoLight} alt=""/>
                        </div>
                        <a href='https://t.me/trabajo_ES' className={style.telegramLink}>t.me/trabajo_ES</a>
                        <ul className={style.infoList}>
                            <li>- Помогаем с получением рабочей визы</li>
                            <li>- 🤫 Делаем приглашение на работу 5-7 дней</li>
                            <li>- Готовим договор и знакомим вас с работодателем</li>
                        </ul>
                        <div className={style.contacts}>
                            📲 Контакты для связи
                        </div>
                        <a className={style.telegramLink}
                           href='https://t.me/roman_pozharytski'>https://t.me/roman_pozharytski</a>
                    </div>
                    <button className={style.infoButton}>Подписаться на телеграмм</button>
                </div>
                <form action="" className={style.form}>
                    <AppTitle
                        className={style.formTitle}
                        title='Оставьте заявку на консультацию с HR-Менеджером '
                        subtitle='и получите бесплатный подбор работы по вашим критериям'
                    />
                    <div className={`${style.formButtons} flex-sb-c`}>
                        <button className={style.active}>Для соискателей</button>
                        <button>Для работодателей</button>
                    </div>
                    <div className={style.formFields}>
                        <input type="text" placeholder='Ваше имя' className={style.input}/>
                        <FormSelect className={style.input} text='Выберете удобный способ связи'/>
                        <FormFile className={style.input}/>
                        <button className={style.formSubmitButton}>Отправить</button>
                    </div>
                </form>
                <div className={`${style.subscribeImage} image-container`}>
                    <img src={employeeImage} alt=""/>
                </div>
            </div>
        </div>
    )
}