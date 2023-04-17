import style from './FormCommunication.module.scss';
import {FormSelect} from "../fields/FormSelect";

export const FormCommunication = ({changeName}) => {

  const changeHandle = (e) => changeName(e.currentTarget.value);
    return (
      <form action="src/components/subscribe/Subscribe">
        <div className={style.formFields}>
          <label><input type="text" placeholder='Ваше имя' className="inputBase" onChange={changeHandle}/></label>
          <FormSelect text='Выберете удобный способ связи'/>
          <button className="baseBtn">Отправить</button>
        </div>
      </form>
    )
}
