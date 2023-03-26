import style from './Fields.module.scss';
import arrowDown from '../../images/arrow-down.svg';
import {useState} from "react";

export const FormSelect = ({text, className, imageClassName, children, isOpen}) => {
    const finalClassName = className ? `${style.select} ${className}` : style.select;
    const [open, setOpen] = useState(isOpen);
    const clickHandler = (e) => {
        e.preventDefault();
        setOpen(!open);
    };
    return (
        <div className={!open ? `${style.formSelect}` : `${style.formSelect} ${style.open}`}>
            <button onClick={clickHandler} className={`${finalClassName} flex-sb-c`}>
                <span>{text}</span>
                <span className={`${style.selectImage} ${imageClassName} image-container`}>
                <img src={arrowDown} alt=""/>
            </span>
            </button>
            <div className={style.children}>
                {children}
            </div>
        </div>
    )
}