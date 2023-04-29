import style from './Fields.module.scss';


export const FormListItem = ({img, text, clickItemHandler}) => {
    const clickHandler = (e) => {
        e.preventDefault();
        clickItemHandler(text);
    };
    return (
        <button className={style.listItem} onClick={clickHandler}>
                    <span className={`${style.listImage} image-container`}>
                        <img src={img} alt=""/>
                    </span>
            <span className={style.listText}>{text}</span>
        </button>
    )
}