import style from "./Header.module.scss";
import arrowDown from "../../images/arrow-down.svg";

export const HeaderInfo = () => {
    return(
        <div className={`${style.headerInfo} container flex-sb-c`}>
            <div className={style.infoItem}>
                <div className={style.title}>HR-work.services</div>
                <div className={style.subtitle}>Сервис для поиска работы</div>
            </div>
            <div className={style.infoItem}>
                <p>Лучший Сервис для поиска работы в ЕС</p>
                <p>Сопровождаем на всех этапах трудоустройства</p>
            </div>
            <div className={style.infoItem}>
                <p>Для HR агентств и прямых работодателей</p>
                <p>Хотите <a href='src/components'>разместить ваши вакансии</a> в нашей базе?</p>
            </div>
            <div className={style.infoItem}>
                <p>HR менеджер сейчас Online</p>
                <p><button className='flex-start-center'>+375 (44) 711-24-64 <img src={arrowDown} alt=""/></button></p>
            </div>
        </div>
    )
}