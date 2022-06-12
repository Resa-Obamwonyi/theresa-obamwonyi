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
        <Nav link="https://docs.google.com/document/d/e/2PACX-1vT0cqQ4cqXt6kae--xm9eLiTEZSL_Pv2oU9EG8bdPAE6z9yJhOOZpy9FpQn0nbJFykXaKDjBRJXHrae/pub">
          Download Resume
        </Nav>
        <Button link="/contact" width="126px" className="btn">
          Contact Me
        </Button>
      </NavWrapStyle>
    );
}


export default NavWrap;
