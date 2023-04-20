import style from "./Header.module.scss";

export const ListItem = ({img, text, href, clickItemHandler}) => {
    return (
        <a className={style.listItem} href={href} target='_blank' onClick={clickItemHandler}>
                    <span className={`${style.listImage} image-container`}>
                        <img src={img} alt=""/>
                    </span>
            <span className={style.listText}>{text}</span>
        </a>
    )
}