import style from './AboutWork.module.scss';
import {AboutWorkItem} from "./AboutWorkItem";
import arrow1 from '../../images/about/arrow1.svg';
import arrow2 from '../../images/about/arrow2.svg';
import arrow3 from '../../images/about/arrow3.svg';
import {AboutWorkContainer} from "./AboutWorkContainer";
import {Subscribe} from "./Subscribe";

export const AboutWork = () => {
    return (
        <section className={style.aboutWork}>
            <div className='container'>
                <h4 className={style.aboutWorkTitle}>Как мы работаем с потенциальным кандидатом</h4>
                <AboutWorkContainer>
                    <AboutWorkItem number={1} text='Вы оставляете заявку'/>
                    <AboutWorkItem number={2} text='Мы подбираем вам вакансию'/>
                    <AboutWorkItem number={3} text='Высылаем вам приглашение на работу'/>
                    <AboutWorkItem number={4} text='Готовим рабочую визу и полный пакет документов'/>
                    <AboutWorkItem number={5} text='Вы едете на работу в ЕС'/>
                    <button className={style.aboutWorkButton}>Оставить заявку</button>
                    <div className={`${style.aboutWorkImage} ${style.arrowFirst} image-container`}>
                        <img src={arrow1} alt=""/>
                    </div>
                    <div className={`${style.aboutWorkImage} ${style.arrowSecond} image-container`}>
                        <img src={arrow1} alt=""/>
                    </div>
                    <div className={`${style.aboutWorkImage} ${style.arrowThird} image-container`}>
                        <img src={arrow2} alt=""/>
                    </div>
                    <div className={`${style.aboutWorkImage} ${style.arrowFourth} image-container`}>
                        <img src={arrow3} alt=""/>
                    </div>
                </AboutWorkContainer>
                <Subscribe/>
            </div>
        </section>
    )
}