import style from "./Steps.module.scss";

export const StepsContainer = ({children}) => {
    return(
        <div className={style.stepsContainer}>
            {children}
        </div>
    )
}