import style from './Main.module.scss';
import formBackground from "../../images/form-background.svg";
import {Jumbotron} from "../jumbotron/Jumbotron";

export const MainVacancy = () => {
  const title = "Технический директор для контроля прорабов и бригадиров с зп от 10 000 BYN";

    return (
        <section className={style.main}>
            <div className="container">
                <Jumbotron title={title} >
                  <div className={`image-container ${style.mainImage}`}>
                    <img src={formBackground} alt=""/>
                  </div>
                </Jumbotron>
            </div>
        </section>
    )
}