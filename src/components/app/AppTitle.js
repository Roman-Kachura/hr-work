import style from './App.module.scss';

export const AppTitle = ({title,subtitle,className}) => {
    const finalClassName = className ? `${style.appTitle} ${className}` : style.appTitle;
    return(
        <div className={finalClassName}>
            <div className={style.title}>{title}</div>
            <div className={style.subtitle}>{subtitle}</div>
        </div>
    )
}