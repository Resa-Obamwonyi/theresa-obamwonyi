import React, {useState} from 'react';
import {HeadStyle} from './style';
import NavWrap from '../NavWrap';
import Logo from '../Logo';
import SideNavWrap from "../SideNavWrap";
import { GiHamburgerMenu } from "react-icons/gi";



const Header=()=> {
  const [showMenu, setShowMenu] = useState(false);
  let menu;

  // setShowMenu(!showMenu);
  if (showMenu) {
    menu = <SideNavWrap />;
  }

  console.log(showMenu);
  return (
    <HeadStyle>
      <Logo />
      <NavWrap />
      <GiHamburgerMenu
        className="burger"
        onClick={() => setShowMenu(!showMenu)}
      />
      {menu}
    </HeadStyle>
  );
}


export default Header;

