import {Main} from "../components/main/Main";
import {Vacancies} from "../components/vacancies/Vacancies";
import {HotVacancies} from "../components/hot-vacancies/HotVacancies";
import {AboutWork} from "../components/about-work/AboutWork";
import {Subscribe} from "../components/subscribe/Subscribe";
import {Search} from "../components/search/Search";

export const CommonPage = () => {
    return (
        <>
          <Main/>
          <Search/>
          <Vacancies/>
          <HotVacancies/>
          <AboutWork/>
          <Subscribe/>
        </>
    )
}
