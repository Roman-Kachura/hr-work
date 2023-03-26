import style from './Fields.module.scss';

export const RadioButtons = ({className, values, name, callBack}) => {
    return (
        <div className={className ? `${className} ${style.radios}` : style.radios}>
            {
                values.map(
                    (v, i) => <RadiosItem key={i} text={v.text} name={name} value={v.value} callBack={callBack}/>
                )
            }
        </div>
    )
}

const RadiosItem = ({text, value, name, callBack}) => {
    const changeHandler = () => callBack(value);
    return (
        <div className={style.radiosItem}>
            <input onChange={changeHandler} type='radio' name={name} id={value} value={value}/>
            <label htmlFor={value}>{text}</label>
        </div>
    )
}