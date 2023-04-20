import style from './Tabs.module.scss';

export const TabsList = ({children}) => {
    return (
        <div className={style.tabsList}>
            {children}
        </div>
    )
}