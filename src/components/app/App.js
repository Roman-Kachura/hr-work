import style from './App.module.scss';
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {Content} from "../content/Content";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}
