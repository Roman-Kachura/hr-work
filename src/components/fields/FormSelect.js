import style from './Fields.module.scss';
import arrowDown from '../../images/arrow-down.svg';

export const FormSelect = () => {
    return (
        <div className={`${style.select} flex-sb-c`}>
            <span>Выберете удобный способ связи</span>
            <span className={`${style.selectImage} image-container`}>
                <img src={arrowDown} alt=""/>
            </span>
        </div>
    )
}