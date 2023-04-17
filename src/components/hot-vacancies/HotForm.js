import style from './HotVacancies.module.scss';
import {useState} from "react";
import {FormCommunication} from "../form-communication/FormCommunication";

export const HotForm = () => {
    const [name, setName] = useState('');
    const changeName = (newName) => setName(newName);
    return (
        <div className={style.hotForm}>
            <div className={"formTitleBase"}>Не нашли нужной вам вакансии?</div>
            <div className={"formSubtitleBase"}>Напишите нашему менеджеру в один из удобных для вас месенджеров и мы
                подберём под вас топ вакансий из базы</div>
            <FormCommunication changeName={changeName} />
        </div>
    )
}