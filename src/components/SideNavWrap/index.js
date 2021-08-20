import React from "react";
import { SideNavWrapStyle } from "./style";
import SideNav from "../SideNav";
import { IoCloseSharp } from "react-icons/io5";
import { FaUser, FaBlog, FaPhoneAlt, FaHome } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";

const SideNavWrap = ({ showMenu, setShowMenu }) => {
  let drawerClasses = '';
  if (showMenu) {
    drawerClasses = 'open';
  }
  return (
    <SideNavWrapStyle style={{ display: !showMenu && "none" }} className={drawerClasses} >

      <SideNav link="/">
        Home      
      </SideNav>

      <SideNav link="/blog">
        Technical Writings
      </SideNav>

      <SideNav link="/xp">
        Download Resume
      </SideNav>

      <SideNav link="/contact">
        Contact
      </SideNav>

      <SideNav>
        <IoCloseSharp onClick={() => setShowMenu(false)} />
      </SideNav>
      
    </SideNavWrapStyle>
  );
};

export default SideNavWrap;
