import style from './CompanyyDescription.module.scss';
import {Tabs} from "../tabs/Tabs";

export const CompanyDescription = () => {
    return (
        <section className={style.companyDescriptionSection}>
            <div className='container'>
              <h4 className="sectionTitle">Описание о компании</h4>
              <ol>
                <li>Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней.  Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
                <li>Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней. Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
                <li> Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней. Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
              </ol>
            </div>
        </section>
    )
}





