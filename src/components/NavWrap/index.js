import React from 'react';
import {NavWrapStyle} from './style';
import Nav from '../Nav';
import Button from '../Button';


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
