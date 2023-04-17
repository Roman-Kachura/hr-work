import style from './Subscribe.module.scss';
import infoLight from '../../images/info-light.svg';
import employeeImage from '../../images/employee.svg';
import {FormRequestConsult} from "../form-request-consult/FormRequestConsult";


export const Subscribe = ({className}) => {
    const finalClassName = className ? `${style.subscribe} ${className}` : style.subscribe;
    return (
      <section className={style.subscribeSection}>
          <div className="container">
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
                          <ul className={"list"}>
                              <li>Помогаем с получением рабочей визы</li>
                              <li>🤫 Делаем приглашение на работу 5-7 дней</li>
                              <li>Готовим договор и знакомим вас с работодателем</li>
                          </ul>
                          <div className={style.contacts}>
                              📲 Контакты для связи
                          </div>
                          <a className={style.telegramLink}
                             href='https://t.me/roman_pozharytski'>https://t.me/roman_pozharytski</a>
                      </div>
                      <button className={"secondaryBtn"}>Подписаться на телеграмм</button>
                  </div>
                  <FormRequestConsult className={"smallForm"}/>
                  <div className={`${style.subscribeImage} image-container`}>
                      <img src={employeeImage} alt=""/>
                  </div>
              </div>
          </div>
      </section>

    )
}