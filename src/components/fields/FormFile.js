import style from './Fields.module.scss';
import clip from '../../images/clip.svg';

export const FormFile = () => {
    return (
        <div className={`${style.file} flex-sb-c`}>
            <span>Прикрепите ваше резюме</span>
            <span className={`${style.fileImage} image-container`}>
                <img src={clip} alt=""/>
            </span>
        </div>
    )
}