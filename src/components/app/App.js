import style from './App.module.scss';
import {Header} from "../header/Header";
import {Main} from "../main/Main";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
        </div>
    )
}
