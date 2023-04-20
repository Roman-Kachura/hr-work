import style from './ModalWindow.module.scss';
import {FormFile} from "../fields/FormFile";
import {modalDB} from "./modalData";
import {LinksItem} from "./LinksItem";

export const ModalWindow = ({closeModal, isOpen}) => {

    const finishClassName = isOpen ? `${style.modal} ${style.active}` : style.modal;
    return (
        <div className={finishClassName}>
            <div className={style.modalWrapper}>
                <h3 className={style.title}>Мы поможем с поиском вакансий</h3>
                <h4 className={style.subtitle}>Пожалуйста заполните форму и наши специалисты свяжутся с вами.</h4>
                <form className={style.form}>
                    <div className={style.fields}>
                        <input type='text' placeholder='Ваше имя' className={style.input}/>
                        <input type='text' placeholder='Ваш телефон' className={style.input}/>
                        <input type='text' placeholder='Ссылка на резюме' className={style.input}/>
                    </div>
                    <FormFile className={style.file}/>
                </form>
                <div className={style.modalContact}>
                    <h4 className={style.title}>Выберите предпочтительный способ связи</h4>
                    <div className={style.links}>
                        {modalDB.map(l => <LinksItem key={l.text} href={l.href} image={l.image} text={l.text}/>)}
                    </div>
                </div>
                <button className={style.modalButton}>отправить</button>
                <button onClick={closeModal} className={style.modalCloseButton}>&#9587;</button>
            </div>
        </div>
    )
}