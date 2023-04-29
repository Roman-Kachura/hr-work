import style from "./Header.module.scss";

export const ListItem = ({img, text, href, clickItemHandler, className}) => {
    const finishClassName = className ? `${className} ${style.listItem}` : style.listItem;
    return (
        <a className={finishClassName} href={href} target='_blank' onClick={clickItemHandler}>
                    <span className={`${style.listImage} image-container`}>
                        <img src={img} alt=""/>
                    </span>
            <span className={style.listText}>{text}</span>
        </a>
    )
}