import style from './Main.module.scss';
import formBackground from "../../images/form-background.svg";
import {Jumbotron} from "../jumbotron/Jumbotron";

export const Main = () => {
    const title = "Легальная работа в ЕС — официальное трудоустройство в течении 1-3 рабочих дней";

    return (
        <section className={style.main}>
            <div className="container">
                <Jumbotron title={title}>
                    <div className={`image-container ${style.mainImage}`}>
                        <img src={formBackground} alt=""/>
                    </div>
                </Jumbotron>
            </div>
        </section>
    )
}