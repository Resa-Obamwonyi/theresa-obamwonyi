import React, { useState } from 'react';
import { SideNavWrapStyle } from './style';
import SideNav from "../SideNav";
import { IoCloseSharp } from "react-icons/io5";
import { FaUser, FaBlog, FaPhoneAlt } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";


const SideNavWrap = () => {
const [hideMenu, setHideMenu] = useState(false);
  let view;

if (hideMenu) {
  view = "none";
}
  console.log(hideMenu);
  return (
    <SideNavWrapStyle style={{ display: view }}>
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

      <SideNav>
        <IoCloseSharp onClick={() => setHideMenu(!hideMenu)} />
      </SideNav>
    </SideNavWrapStyle>     
  );
}; 

export default SideNavWrap;
