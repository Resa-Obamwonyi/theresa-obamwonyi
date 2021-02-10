import React from 'react';
import { SideNavWrapStyle } from './style';
import SideNav from "../SideNav";
import { FaUser, FaBlog, FaPhoneAlt } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";


const SideNavWrap = () => {
  return(
    
    <SideNavWrapStyle>
      
        <SideNav link="#About">
          <FaUser />
      </SideNav>
      
        <SideNav link="https://resa-obamwonyi.hashnode.dev/">
          <FaBlog />
      </SideNav>
        
        <SideNav link="#Experience">
          <CgWorkAlt />
        </SideNav>
          
        <SideNav link="#Contact">
        <FaPhoneAlt />
      </SideNav>
            
  </SideNavWrapStyle>
  )};

export default SideNavWrap;
