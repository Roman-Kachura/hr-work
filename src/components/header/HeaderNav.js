import style from "./Header.module.scss";
import {NavLink} from "react-router-dom";

const links = [{text: 'Каталог вакансий', url: '/'}, {
    text: 'Визы и приглашения на работу',
    url: '/2'
}, {text: 'Для партнеров', url: '/3'}, {text: 'Вопросы', url: '/4'}, {text: 'Блог', url: '/5'}]

export const HeaderNav = () => {
    return (<nav className={`${style.headerNav}`}>
        <div className="container flex-sb-c">
            {
                links.map((l, i) =>
                  <NavLink
                    key={i}
                    className={({isActive}) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                    to={l.url}>{l.text}</NavLink>
                )
            }
        </div>

    </nav>)
}