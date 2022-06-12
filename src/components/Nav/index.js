import React from 'react';
import {NavStyle} from './style';


const Nav=({ children, link }) => {

    return (
        <NavStyle>  

        <a href={link} target="_blank">
            {children}
            
        </a>
        </NavStyle>
        )
}


export default Nav;
