import style from './Fields.module.scss';
import clip from '../../images/clip.svg';
import {useRef, useState} from "react";

export const FormFile = ({className}) => {
    const [file, setFile] = useState();
    const fileRef = useRef();
    const finalClassName = className ? `${style.file} ${className}` : style.file;
    const clickHandler = () => {
        fileRef.current.click();
    }
    const uploadFile = (e) => {
        setFile(e.currentTarget.files[0]);
    }
    return (
        <div className={`${finalClassName} flex-sb-c`} onClick={clickHandler}>
            <input type='file' className={style.fileInput} ref={fileRef} onChange={uploadFile}/>
            <span className={style.fileName}>{(file && file.name) || 'Прикрепите ваше резюме'}</span>
            <span className={`${style.fileImage} image-container`}>
                <img src={clip} alt=""/>
            </span>
        </div>
    )
}