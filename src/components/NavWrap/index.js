import React from 'react';
import {NavWrapStyle} from './style';
import Nav from '../Nav'

const NavWrap=() => {

    return (
        <NavWrapStyle>  
            <Nav link="#About">About</Nav>
            <Nav link="#Experience">Current XP</Nav>
            <Nav link="#Contact">Contact</Nav>
        </NavWrapStyle>
        )
}


export default NavWrap;
