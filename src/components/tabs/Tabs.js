import style from './Tabs.module.scss';
import {TabContent} from "./TabContent";
import {TabItem} from "./TabItem";
import {TabsList} from "./TabsList";
import {useState} from "react";

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const onClickTabItem = (newActiveTab) => {
      setActiveTab(newActiveTab);
    };

    return (
        <div className={style.tabsContainer}>
            <TabsList>
                <TabItem label="Обязанности" key={0} id={0} activeTab={activeTab} onClickTabItem={onClickTabItem} />
                <TabItem label="Требования для кандидатов" key={1}  id={1} activeTab={activeTab} onClickTabItem={onClickTabItem} />
                <TabItem label="Обязанности кандидата" key={2}  id={2} activeTab={activeTab} onClickTabItem={onClickTabItem} />
                <TabItem label="Обязанности кандидата" key={3}  id={3} activeTab={activeTab} onClickTabItem={onClickTabItem} />
            </TabsList>
            <TabContent activeTab={activeTab} index={0}>
              <ol>
                <li>Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней.  Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
                <li>Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней. Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
                <li> Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней. Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
              </ol>
            </TabContent>
            <TabContent activeTab={activeTab} index={1}>
              <ol>
                <li>Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней.  Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
                <li>Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней. Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
              </ol>
            </TabContent>
            <TabContent activeTab={activeTab} index={2}>
              <ol>
                <li>Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней.  Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
              </ol>
            </TabContent>
            <TabContent activeTab={activeTab} index={3}>
              <ol>
                <li>Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней.  Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
                <li>Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней. Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
                <li> Помогаем с получением рабочей визы.  🤫 Делаем приглашение на работу 5-7 дней. Готовим договор и знакомим вас с работодателем.
                  🔥 Выделяем руско / Укр говорящего куратора.</li>
              </ol>
            </TabContent>
        </div>

    )
}