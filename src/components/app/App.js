import style from './App.module.scss';
import {Header} from "../header/Header";
import {Main} from "../main/Main";
import {Vacancies} from "../vacancies/Vacancies";
import {HotVacancies} from "../hot-vacancies/HotVacancies";
import {AboutWork} from "../about-work/AboutWork";
import {Footer} from "../footer/Footer";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Vacancies/>
            <HotVacancies/>
            <AboutWork/>
            <Footer/>
        </div>
    )
}
