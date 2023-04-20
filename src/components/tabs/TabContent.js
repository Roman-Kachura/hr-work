import style from './Tabs.module.scss';

export const TabContent = ({children, activeTab, index, ...other}) => {
    return (
        <div className={style.tabContent}
          hidden={activeTab !== index}
          id={`simple-tabpanel-${index}`}
          {...other}
        >
            {children}
        </div>
    );
}