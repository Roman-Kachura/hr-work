import style from './Header.module.scss';
import {HeaderInfo} from "./HeaderInfo";
import {HeaderNav} from "./HeaderNav";

export const Header = () => {
    return (
        <header className={style.header}>
            <HeaderInfo/>
            <HeaderNav/>
        </header>
    )
}