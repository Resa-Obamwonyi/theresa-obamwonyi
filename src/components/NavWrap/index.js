import React from 'react';
import {NavWrapStyle} from './style';
import Nav from '../Nav';
import Button from '../Button';
import { FaUser, FaBlog } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";


const NavWrap=() => {

    return (
      <NavWrapStyle>
        <Nav link="#About"><FaUser /></Nav>
        <Nav link="https://resa-obamwonyi.hashnode.dev/"><FaBlog /></Nav>
        <Nav link="#Experience"><CgWorkAlt /></Nav>
        <Button href="#Contact" width="150px">Contact</Button>
      </NavWrapStyle>
    );
}


export default NavWrap;
