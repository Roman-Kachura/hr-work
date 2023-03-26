import style from './App.module.scss';

export const AppTitle = ({title,subtitle,className}) => {
    const finalClassName = className ? `${style.appTitle} ${className}` : style.appTitle;
    return(
        <div className={finalClassName}>
            <h3 className={style.title}>{title}</h3>
            <h4 className={style.subtitle}>{subtitle}</h4>
        </div>
    )
}