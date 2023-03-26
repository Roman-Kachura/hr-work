import style from './AboutWork.module.scss';

export const AboutWorkItem = ({number, text}) => {
    return(
        <div className={style.aboutWorkItem}>
            <span className={style.number}>{number}</span>
            <span>{text}</span>
        </div>
    )
}