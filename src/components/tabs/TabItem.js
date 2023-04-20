import style from './Tabs.module.scss';

export const TabItem = ({label, id, activeTab, onClickTabItem}) => {
    const finalClassName = activeTab === id ? `${style.tabItem} ${style.active}` : style.tabItem;
    const changeTab = () => {
        onClickTabItem(id);
    }

    return(
        <button className={finalClassName} id={id} onClick={changeTab}>
          {label}
        </button>
    )
}