import React from "react";
import { SideNavWrapStyle } from "./style";
import SideNav from "../SideNav";
import { IoCloseSharp } from "react-icons/io5";

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

      <SideNav link="https://docs.google.com/document/d/e/2PACX-1vT0cqQ4cqXt6kae--xm9eLiTEZSL_Pv2oU9EG8bdPAE6z9yJhOOZpy9FpQn0nbJFykXaKDjBRJXHrae/pub">
        Download Resume
      </SideNav>

      <SideNav link="#contact">
        Contact
      </SideNav>

      <SideNav>
        <IoCloseSharp onClick={() => setShowMenu(false)} />
      </SideNav>
      
    </SideNavWrapStyle>
  );
};

export default SideNavWrap;
