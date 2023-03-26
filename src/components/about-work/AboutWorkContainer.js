import style from "./AboutWork.module.scss";

export const AboutWorkContainer = ({children}) => {
    return(
        <div className={style.aboutWorkContent}>
            {children}
        </div>
    )
}