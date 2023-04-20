import style from "./Header.module.scss";
import viberImage from "../../images/viber.svg";
import whatsupImage from "../../images/modal/whatsup.svg";
import telegramImage from "../../images/modal/telegram.svg";
import arrowDown from "../../images/arrow-down.svg";
import {useState} from "react";
import {ListItem} from "./ListItem";

const items = [
    {id: 0, img: viberImage, text: 'Viber', href: ''},
    {id: 1, img: whatsupImage, text: 'WhatsUp', href: ''},
    {id: 2, img: telegramImage, text: 'Telegram', href: ''},
]

export const HeaderRadio = () => {
    const [open, setOpen] = useState(false);
    const changeOpenHandler = () => {
        setOpen(!open);
    }
    const clickItemHandler = () => changeOpenHandler();
    const radiosListClassName = open ? `${style.radioList} ${style.open}` : style.radioList;
    return (
        <div className={style.headerRadio} onClick={changeOpenHandler}>
            <span className={style.radioText}>Способ связи</span>
            <div className={'image-container'}>
                <img src={arrowDown} alt=""
                     style={{transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '.3s'}}/>
            </div>
            <div className={radiosListClassName}>
                {
                    items.map(i =>
                        <ListItem
                            key={i.id}
                            text={i.text}
                            href={i.href}
                            img={i.img}
                            clickItemHandler={clickItemHandler}
                        />
                    )
                }
            </div>
        </div>
    )
}