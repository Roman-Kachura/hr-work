import style from "./Header.module.scss";
import arrowDown from "../../images/arrow-down.svg";
import avatar from "../../images/avatar.svg";
import viberImage from '../../images/viber.svg';
import {HeaderRadio} from "./HeaderRadio";

export const HeaderInfo = ({openModal}) => {
    return (
        <div className={`${style.headerInfo} container flex-sb-c`}>
            <div className={style.infoItem}>
                <div className={style.title}>HR-work.services</div>
                <div className={style.subtitle}>Сервис для поиска работы</div>
            </div>
            <div className={style.infoItem}>
                <div className={style.infoText}>Лучший Сервис для поиска работы в ЕС</div>
                <div className={style.infoText}>Мы прямой работодатель</div>
            </div>
            <div className={style.infoItem}>
                <div className={style.infoText}>
                    <button className={style.outlineBtn} onClick={openModal}>Отправить ваше CV</button>
                </div>
            </div>
            <div className={style.infoItem}>
                <div className={style.infoText}>
                    <HeaderRadio/>
                </div>
            </div>
            <div className={`${style.infoItem} flex-start-center`}>
                <div className={style.avatar}><img src={avatar}/></div>
                <div>
                    <div className={style.infoText}>HR менеджер сейчас Online</div>
                    <div className={style.infoText}>
                        <button className={style.btnDropdown}>+375 (44) 711-24-64 <img src={arrowDown} alt=""/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}