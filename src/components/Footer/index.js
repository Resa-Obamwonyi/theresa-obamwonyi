import React from "react";
import { FooterStyle } from "./style";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyle>
      <FaRegCopyright /> Resa Obamwonyi, {new Date().getFullYear()}
    </FooterStyle>
  );
};

export default Footer;
