import React from 'react';
import {NavWrapStyle} from './style';
import Nav from '../Nav';
import Button from '../Button';
import { FaUser, FaBlog, FaHome } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";


const NavWrap=() => {

    return (
      <NavWrapStyle>
        <Nav link="/blog">
          Technical Writings
        </Nav>
        <Nav link="/about">
          Download Resume
        </Nav>
        <Button link="/contact" width="126px" className="btn">
          Contact Me
        </Button>
      </NavWrapStyle>
    );
}


export default NavWrap;
