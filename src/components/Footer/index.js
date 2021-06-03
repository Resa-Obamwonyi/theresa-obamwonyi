import React from "react";
import { FooterStyle } from "./style";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyle>
       <span> <FaRegCopyright /> Resa Obamwonyi, {new Date().getFullYear()}</span>
    </FooterStyle>
  );
};

export default Footer;
