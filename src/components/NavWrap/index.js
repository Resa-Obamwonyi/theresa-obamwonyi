import React from 'react';
import {NavWrapStyle} from './style';
import Nav from '../Nav';
import Button from '../Button';
import { FaUser, FaBlog, FaHome } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";


const NavWrap=() => {

    return (
      <NavWrapStyle>
        <Nav link="/">
          <FaHome />
        </Nav>
        <Nav link="/about">
          <FaUser />
        </Nav>
        <Nav link="/blog">
          <FaBlog />
        </Nav>
        <Nav link="/xp">
          <CgWorkAlt />
        </Nav>
        <Button link="/contact" width="150px" className="btn">
          Contact
        </Button>
      </NavWrapStyle>
    );
}


export default NavWrap;
