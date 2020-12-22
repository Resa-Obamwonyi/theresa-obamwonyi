import React from 'react';
import {NavStyle} from './style';


const Nav=({ children, link }) => {

    return (
        <NavStyle>  

        <a href={link}>
            {children}
            
        </a>
        </NavStyle>
        )
}


export default Nav;
