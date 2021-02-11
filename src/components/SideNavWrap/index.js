import React from "react";
import { SideNavWrapStyle } from "./style";
import SideNav from "../SideNav";
import { IoCloseSharp } from "react-icons/io5";
import { FaUser, FaBlog, FaPhoneAlt } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";

const SideNavWrap = ({ showMenu, setShowMenu }) => {

  return (
    <SideNavWrapStyle style={{ display: !showMenu && "none" }}>
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
        <IoCloseSharp onClick={() => setShowMenu(false)} />
      </SideNav>
    </SideNavWrapStyle>
  );
};

export default SideNavWrap;
