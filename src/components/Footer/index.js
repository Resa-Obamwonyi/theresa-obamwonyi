import React from "react";
import { FooterStyle } from "./style";
import { FaRegCopyright, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Form from "../Form";

const Footer = () => {
  return (
    <FooterStyle id="contact">
      <div className="top-section">
        <div className="handles">
          <h1>Get in touch</h1>
          <p>I’m open to working with you and exploring new opportunities</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/theresa-obamwonyi/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a className="social" href="https://twitter.com/resa_wrights" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com/Resa-Obamwonyi" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <Form />
      </div>
       <span> <FaRegCopyright /> Resa Obamwonyi, {new Date().getFullYear()}</span>
    </FooterStyle>
  );
};

export default Footer;
