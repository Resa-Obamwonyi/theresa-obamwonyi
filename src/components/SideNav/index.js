import React from 'react';
import {SideNavStyle} from './style';


const SideNav=({ children, link }) => {

    return (
        <SideNavStyle>  

        <a href={link}>
            {children}
            
        </a>
        </SideNavStyle>
        )
}


export default SideNav;
