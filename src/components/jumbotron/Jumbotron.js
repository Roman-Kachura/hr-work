import style from './Jumbotron.module.scss';
import {FormRequestConsult} from "../form-request-consult/FormRequestConsult";

export const Jumbotron = ({title, children}) => {
    return (
        <>
            <h2 className={style.jumbotronTitle}>
                {title}
            </h2>
            {children}
            <FormRequestConsult/>
        </>
    )
}