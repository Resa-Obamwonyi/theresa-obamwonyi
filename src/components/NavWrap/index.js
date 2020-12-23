import React from 'react';
import {NavWrapStyle} from './style';
import Nav from '../Nav'
import Button from '../Button'

const NavWrap=() => {

    return (
        <NavWrapStyle>  
            <Nav link="#About">About</Nav>
            <Nav link="#Experience">Current XP</Nav>
            <Button href="#Contact" width="150">Contact</Button>
        </NavWrapStyle>
        )
}


export default NavWrap;
