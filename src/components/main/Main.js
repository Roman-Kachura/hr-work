import style from './Main.module.scss';
import {Form} from "./Form";
import formBackground from "../../images/form-background.svg";

export const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.mainContainer}>
                <h2 className={style.mainTitle}>
                    Легальная работа в ЕС — официальное трудоустройство в течении 1-3 рабочих дней
                </h2>
                <div className={`image-container ${style.mainImage}`}>
                    <img src={formBackground} alt=""/>
                </div>
                <Form className={style.mainForm}/>
            </div>
        </main>
    )
}