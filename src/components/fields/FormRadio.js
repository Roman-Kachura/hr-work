import style from './Fields.module.scss';
import viberImage from "../../images/viber.svg";
import whatsupImage from "../../images/modal/whatsup.svg";
import telegramImage from "../../images/modal/telegram.svg";
import arrowDown from "../../images/arrow-down.svg";
import {useEffect, useState} from "react";
import {FormListItem} from "./FormListItem";

const items = [
    {id: 0, img: viberImage, text: 'Viber', href: ''},
    {id: 1, img: whatsupImage, text: 'WhatsUp', href: ''},
    {id: 2, img: telegramImage, text: 'Telegram', href: ''},
]

export const FormRadio = ({text}) => {
    const [open, setOpen] = useState(false);
    const [contact, setContact] = useState('');
    const changeOpenHandler = () => {
        setOpen(!open);
    }
    const clickItemHandler = (value) => {
        setContact(value);
        changeOpenHandler();
    };
    const radiosListClassName = open ? `${style.radioList} ${style.open}` : style.radioList;
    useEffect(() => {
        if (open) {
            const closeHandler = () => setTimeout(() => setOpen(false), 10000);
            const id = closeHandler();
            return () => clearTimeout(id);
        }
    }, [open]);
    return (
        <div className={style.formRadio} onClick={changeOpenHandler}>
            <span className={style.radioText}>{!contact ? `${text}` : contact}</span>
            <div className={`${style.radioArrow} image-container`}>
                <img src={arrowDown} alt=""
                     style={{transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '.3s'}}/>
            </div>
            <div className={radiosListClassName}>
                {
                    items.map(i =>
                        <FormListItem
                            key={i.id}
                            text={i.text}
                            img={i.img}
                            clickItemHandler={clickItemHandler}
                        />
                    )
                }
            </div>
        </div>
    )
}

