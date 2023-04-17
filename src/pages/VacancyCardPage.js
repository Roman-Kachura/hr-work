import {MainVacancy} from "../components/main/MainVacancy";
import {Search} from "../components/search/Search";
import {Subscribe} from "../components/subscribe/Subscribe";
import {Skills} from "../components/skills/Skills";
import {VacancyDescription} from "../components/vacancy-description/VacancyDescription";
import {CompanyDescription} from "../components/company-description/CompanyDescription";
import {MotivationWorker} from "../components/motivation-worker/MotivationWorker";

export const VacancyCardPage = () => {
    return (
        <>
            <MainVacancy/>
            <Search/>
            <Skills/>
            <VacancyDescription/>
            <CompanyDescription/>
            <MotivationWorker/>
            <Subscribe/>
        </>
    )
}
