import style from './Skills.module.scss';
import {StepsContainer} from "../steps/StepsContainer";
import {StepItem} from "../steps/StepItem";

export const Skills = () => {
    return (
        <section className={style.skillsSection}>
            <div className='container'>
                <h4 className={style.skillsTitle}>Ключевые навыки и качества которыми должен обладать кандидат</h4>
                <StepsContainer>
                    <StepItem number={1} text='Руководить процессом стройки' />
                    <StepItem number={2} text='Ответственность' />
                    <StepItem number={3} text='Водительские права' />
                    <StepItem number={4} text='Уметь нанимать прорабов' />
                    <StepItem number={5} text='Надёжность' />
                    <StepItem number={6} text='Не бухать и не хамить!' dedicated="true" />
                </StepsContainer>
            </div>
        </section>
    )
}