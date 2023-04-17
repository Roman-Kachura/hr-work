import {useState} from "react";
import style from "./Vacancies.module.scss";
import {FormSelect} from "../fields/FormSelect";
import {RadioButtons} from "../fields/RadioButtons";
import {VacanciesButton} from "./VacanciesButton";

const roles = [
    {value: 'Комплектовщики'},
    {value: 'Работа на заводах'},
    {value: 'для Строителей'},
    {value: 'Столяры'},
    {value: 'Работа в отеле'},
    {value: 'Для Маркетологов'},
    {value: 'Для IT Сферы'},
];

const salary = [
    {text: 'от 3-5 € в час', value: '3-5'},
    {text: 'от 5-7 € в час', value: '5-7'},
    {text: 'от 10 € в час', value: '10'},
    {text: 'от 13-15 € в час', value: '13-15'},
];

const hoursInDay = [
    {text: '8', value: 8},
    {text: '10', value: 10},
    {text: '12', value: 12},
];

const schedule = [
    {text:'5 дней в неделю и 2 выходных',value:'5'},
    {text:'5-6 дней',value:'5-6'},
];

const countries = [
    {text:'Польша',value:'Poland'},
    {text:'Бельгия',value:'Belgium'},
    {text:'Германия',value:'Germany'},
];

export const VacanciesSideBar = () => {
    const [activeRole, setActiveRole] = useState('');
    const [salaryValue, setSalaryValue] = useState('');
    const [hoursValue, setHoursValue] = useState('');
    const [scheduleValue, setScheduleValue] = useState('');
    const [countryValue, setCountryValue] = useState('');

    const changeRole = (value) => setActiveRole(value);
    const changeSalary = (value) => setSalaryValue(value);
    const changeHours = (value) => setHoursValue(value);
    const changeSchedule = (value) => setScheduleValue(value);
    const changeCountry = (value) => setHoursValue(value);
    return (
        <aside className={style.vacanciesSideBar}>
            <h5 className={style.sideBarTitle}>Фильтр</h5>
            <div className={style.filters}>
              <FormSelect text='Доступные вакансии' className={style.sideBarSelect} imageClassName={style.selectImage}>
                {
                  roles.map((role, i) =>
                    <VacanciesButton
                      key={i}
                      value={role.value}
                      activeValue={activeRole}
                      callBack={changeRole}/>
                  )
                }
              </FormSelect>
              <FormSelect text='Оплата в час' className={style.sideBarSelect} imageClassName={style.selectImage}>
                <h5 className={style.selectTitle}>В месяц оплата от 1000$ - 5000$</h5>
                <RadioButtons values={salary} name='salary' callBack={changeSalary}/>
              </FormSelect>
              <FormSelect text='Рабочих часов' className={style.sideBarSelect} imageClassName={style.selectImage}>
                <RadioButtons values={hoursInDay} name='hours' callBack={changeHours}/>
              </FormSelect>
              <FormSelect text='График работы' className={style.sideBarSelect} imageClassName={style.selectImage}>
                <RadioButtons values={schedule} name='schedule' callBack={changeSchedule}/>
              </FormSelect>
              <FormSelect text='Рабочих часов' className={style.sideBarSelect} imageClassName={style.selectImage}>
                <RadioButtons values={countries} name='country' callBack={changeCountry}/>
              </FormSelect>
            </div>
        </aside>
    )
}