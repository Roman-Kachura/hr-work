import style from "./ModalWindow.module.scss";

export const LinksItem = ({href, image, text}) => {
    return (
        <a href={href} className={style.linksItem}>
            <span className={`${style.itemImage} image-container`}>
                <img src={image} alt=''/>
            </span>
            <span className={style.itemText}>{text}</span>
        </a>
    )
}