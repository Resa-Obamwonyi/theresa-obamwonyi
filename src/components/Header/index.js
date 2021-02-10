import React from 'react';
import {HeadStyle} from './style';
import NavWrap from '../NavWrap';
import Logo from '../Logo';
import SideNavWrap from "../SideNavWrap";


const Header=()=> {

    return (
      <HeadStyle>
        <Logo />
        <NavWrap />
        <SideNavWrap />
      </HeadStyle>
    );
}


export default Header;
