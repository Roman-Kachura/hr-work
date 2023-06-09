import style from "./Header.module.scss";
import viberImage from "../../images/viber.svg";
import whatsupImage from "../../images/modal/whatsup.svg";
import telegramImage from "../../images/modal/telegram.svg";
import arrowDown from "../../images/arrow-down.svg";
import {useEffect, useState} from "react";
import {ListItem} from "./ListItem";

const items = [
    {id: 0, img: viberImage, text: 'Viber', href: ''},
    {id: 1, img: whatsupImage, text: 'WhatsUp', href: ''},
    {id: 2, img: telegramImage, text: 'Telegram', href: ''},
]

export const HeaderRadio = ({text, className, listItemClassName, xs}) => {
    const [open, setOpen] = useState(false);
    const changeOpenHandler = () => setOpen(!open);
    const clickItemHandler = () => changeOpenHandler();
    const radiosListClassName = open ? `${style.radioList} ${style.open}` : style.radioList;
    const finishClassName = className ? `${className} ${style.headerRadio}` : style.headerRadio;
    useEffect(() => {
        if (open) {
            const closeHandler = () => setTimeout(() => setOpen(false), 10000);
            const id = closeHandler();
            return () => clearTimeout(id);
        }
    }, [open]);
    return (
        <div className={finishClassName} onClick={changeOpenHandler}>
            <span className={style.radioText} style={{fontSize: xs ? '1rem' : 'inherit'}}>{!text ? 'Способ связи' : text}</span>
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
                            className={listItemClassName}
                        />
                    )
                }
            </div>
        </div>
    )
}