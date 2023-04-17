import style from './Steps.module.scss';

export const StepItem = ({number, text, dedicated}) => {
  const finalClassName = dedicated ? `${style.stepItem} ${style.dedicated}` : style.stepItem;

    return(
        <div className={finalClassName}>
            <span className={style.number}>{number}</span>
            <span>{text}</span>
        </div>
    )
}