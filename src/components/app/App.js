import style from './App.module.scss';
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {Content} from "../content/Content";
import {ModalWindow} from "../modal/ModalWindow";
import {useState} from "react";

export const App = () => {
    const [open, setOpen] = useState(false);
    const closeHandler = () => setOpen(false);
    const openHandler = () => setOpen(true);
    return (
        <div className={style.app}>
            <Header openModal={openHandler}/>
            <Content/>
            <Footer/>
            <ModalWindow isOpen={open} closeModal={closeHandler}/>
        </div>
    )
}
