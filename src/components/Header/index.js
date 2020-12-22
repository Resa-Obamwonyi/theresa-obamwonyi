import React from 'react';
import {HeadStyle} from './style';
import NavWrap from '../NavWrap';
import Logo from '../Logo';


const Header=()=> {

    return (
        <HeadStyle>  
            <Logo />
            <NavWrap />
        </HeadStyle>
        )
}


export default Header;
