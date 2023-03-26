import style from './Fields.module.scss';
import clip from '../../images/clip.svg';

export const FormFile = ({className}) => {
    const finalClassName = className ? `${style.file} ${className}` : style.file;
    return (
        <div className={`${finalClassName} flex-sb-c`}>
            <span>Прикрепите ваше резюме</span>
            <span className={`${style.fileImage} image-container`}>
                <img src={clip} alt=""/>
            </span>
        </div>
    )
}