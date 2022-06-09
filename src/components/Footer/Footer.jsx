import React from 'react';
import './Footer.css'
import { FiFacebook } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
      <a href="#" className="footer__logo">
        Sayan Paul
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/sayan.pal.1650/" target={"_blank"}>
          {" "}
          <FiFacebook></FiFacebook>
        </a>
        <a
          href="https://www.linkedin.com/in/sayan-paul-a85660209/"
          target={"_blank"}
        >
          {" "}
          <AiOutlineLinkedin></AiOutlineLinkedin>{" "}
        </a>
        <a href="https://github.com/sayanpal469" target={"_blank"}>
          {" "}
          <AiOutlineGithub></AiOutlineGithub>
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Sayan Paul , All right reserved</small>
      </div>
    </footer>
    );
};

export default Footer;