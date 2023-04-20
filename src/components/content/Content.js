import style from './Content.module.scss';
import {CommonPage} from "../../pages/CommonPage";
import {Route, Routes} from 'react-router-dom';
import {VacancyCardPage} from "../../pages/VacancyCardPage";

export const Content = () => {
    return (
        <div className={style.content}>
          <Routes>
            <Route path={'/'} element={<CommonPage/>}/>
            <Route path={'/vacancy'} element={<VacancyCardPage/>}/>
          </Routes>
        </div>
    )
}