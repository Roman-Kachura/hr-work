import style from './Header.module.scss';

export const Burger = ({openMenuCallBack, isOpen}) => {
    const clickHandler = () => openMenuCallBack();
    const finishClassName = isOpen ? `${style.burger} ${style.active}` : style.burger;
    return (
        <div className={finishClassName} onClick={clickHandler}>
            <div className={style.bar1}/>
            <div className={style.bar2}/>
            <div className={style.bar3}/>
        </div>
    )
}