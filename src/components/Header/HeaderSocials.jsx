import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
      <a href="https://www.linkedin.com/in/sayan-paul-a85660209/" target="_blank">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com/sayanpal469" target="_blank">
        <BsGithub></BsGithub>
      </a>
      <a href="https://www.facebook.com/sayan.pal.1650/" target="_blank">
        <BsFacebook></BsFacebook>
      </a>
    </div>
    );
};

export default HeaderSocials;