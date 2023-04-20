import style from './Header.module.scss';
import {HeaderInfo} from "./HeaderInfo";
import {HeaderNav} from "./HeaderNav";
import {Burger} from "./Burger";
import {useState} from "react";

export const Header = ({openModal}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  const finishClassName = isOpen ? `${style.header} ${style.open}` : style.header;

    return (
        <header className={finishClassName}>
            <Burger isOpen={isOpen} openMenuCallBack={openMenu}/>
            <HeaderInfo openModal={openModal}/>
            <HeaderNav/>
        </header>
    )
}