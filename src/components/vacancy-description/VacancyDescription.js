import style from './VacancyDescription.module.scss';
import {Tabs} from "../tabs/Tabs";
import {FormSelect} from "../fields/FormSelect";
import {FormCommunication} from "../form-communication/FormCommunication";

export const VacancyDescription = () => {
    const contentForm = {
        title: "Остались вопросы? Звоните!",
        text: "Напишите нашему менеджеру в  один из удобных для вас месенджеров и мы подберём под вас топ  вакансий из базы "
    }

    return (
        <section className={style.vacancyDescriptionSection}>
            <div className='container'>
                <h4 className="sectionTitle">Описание вакансии</h4>
                <Tabs/>
                <FormCommunication content={contentForm} />
            </div>
        </section>
    )
}





